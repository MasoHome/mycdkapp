// import { Toolkit } from '@aws-cdk/toolkit-lib';

// async function main() {
//     const toolkit = new Toolkit({});

//     // Point to your CDK app entrypoint
//     const assembly = await toolkit.fromCdkApp("bin/mycdkapp.ts");

//     console.log("Cloud assembly created:", assembly);
// }

// main().catch(console.error);


import { CloudFormationClient, CreateStackCommand } from "@aws-sdk/client-cloudformation";
import { Toolkit } from "@aws-cdk/toolkit-lib";

async function main() {
  const toolkit = new Toolkit({});
  const assembly = await toolkit.fromCdkApp("bin/mycdkapp.ts");

  const stack = assembly.stacks[0]; // pick your stack
  const template = JSON.stringify(stack.template);

  const cf = new CloudFormationClient({ region: "ap-southeast-2" });
  await cf.send(new CreateStackCommand({
    StackName: stack.id,
    TemplateBody: template,
    Capabilities: ["CAPABILITY_NAMED_IAM"]
  }));

  console.log("Deployment started via CloudFormation");
}

main().catch(console.error);



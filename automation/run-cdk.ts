import { Toolkit } from '@aws-cdk/toolkit-lib';

async function main() {
    const toolkit = new Toolkit({});

    // Point to your CDK app entrypoint
    const assembly = await toolkit.fromCdkApp("bin/mycdkapp.ts");

    console.log("Cloud assembly created:", assembly);
}

main().catch(console.error);




#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyCdkAppStack } from '../lib/mycdkapp-stack';


const app = new cdk.App();

new MyCdkAppStack(app, 'MyCdkAppStack', {
  
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

});



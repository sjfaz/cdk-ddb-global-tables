#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { GlobalDataLayer } from "../stacks/GlobalDataLayer";

const app = new cdk.App();
new GlobalDataLayer(app, "CdkDdbGlobalTablesStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "eu-west-2",
  },
});

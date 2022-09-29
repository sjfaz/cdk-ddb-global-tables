import * as cdk from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { GlobalDataLayer } from "../stacks/GlobalDataLayer";

test("SQS Queue and SNS Topic Created", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new GlobalDataLayer(app, "MyTestStack");
  // THEN

  const template = Template.fromStack(stack);

  template.resourceCountIs("AWS::DynamoDB::Table", 2);
});

import * as path from "path"

import * as cdk from "aws-cdk-lib"
import * as apigateway from "aws-cdk-lib/aws-apigateway"
import * as lambda from "aws-cdk-lib/aws-lambda"
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"
import * as logs from "aws-cdk-lib/aws-logs"
import { Construct } from "constructs"

export class TemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const handler = new NodejsFunction(this, "hello", {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../src/hello.ts"),
      handler: "handler",
      logRetention: logs.RetentionDays.THREE_MONTHS,
    })

    new apigateway.LambdaRestApi(this, "hello-api", { handler })
  }
}

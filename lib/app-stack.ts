import * as cdk from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns'; // Correct import for SNS Topic
import { Construct } from 'constructs';

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
      ...props,
      env: {
        account: '909180469036', // Account ID should be a string
        region: 'us-east-1',     // Region should be a string
      },
    });

    // Create a new SNS Topic
    const topic = new Topic(this, 'MySnsTopic');
    new cdk.CfnOutput(this, 'SnsTopicArn', { value: topic.topicArn });
    new cdk.CfnOutput(this, 'SnsTopicName', { value: topic.topicName });
  }
}

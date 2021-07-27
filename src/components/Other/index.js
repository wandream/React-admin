import React from "react";
import { Card, PageHeader, Steps, Empty, Image } from "antd";

const { Step } = Steps;

const Other = () => {
  return (
    <div>
      <h1>Other</h1>
      <Card title="页头">
        <PageHeader title="Title" subTitle="This is a subtitle" />
      </Card>
      <Card title="步骤条">
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step
            title="In Progress"
            subTitle="Left 00:00:08"
            description="This is a description."
          />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Card>
      <Card title="空状态">
        <Empty />
      </Card>
      <Card title="图片">
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Card>
    </div>
  );
};

export default Other;

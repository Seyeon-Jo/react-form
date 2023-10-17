import { useState } from "react";
import "./App.css";
import { Form, Input, Select, Checkbox, Button, Spin, Space } from "antd";

function App() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    //Make api call
    setLoading(true);
    setTimeout(() => {
      form.resetFields();
      setLoading(false);
    }, 500);
    form.resetFields();
  };
  const clearForm = () => {
    form.setFieldsValue({
      myName: "",
      gender: "",
      graduated: "",
    });
  };
  return (
    <div className="App">
      <Spin spinning={loading}>
        <Form
          onFinish={onFinish}
          form={form}
          initialValues={{ myName: "SeyeonJo" }}
        >
          <Form.Item label="Name" name={"myName"}>
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item label="Gender" name={"gender"}>
            <Select
              placeholder="Select Gender"
              options={[
                {
                  label: "Male",
                  value: "male",
                },
                {
                  label: "Female",
                  value: "female",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Graduated?"
            name={"graduated"}
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>
          <Space direction="horizontal" size={12}>
            <Button danger onClick={clearForm}>
              Clear Fields
            </Button>
            <Button htmlType="reset" type="ghost">
              Reset
            </Button>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Space>
        </Form>
      </Spin>
    </div>
  );
}

export default App;

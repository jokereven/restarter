import Header from "@/components/Header"
import { Button, Checkbox, Input } from "antd"

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <Header size={"lg"} className="mb-14" />
        <div className="flex gap-4 self-start">
          <button className="text-yellow border-b border-yellow pb-2">
            账号密码登录
          </button>
          <button className="pb-2">手机号登录</button>
        </div>
        <Input
          placeholder="账号"
          className="rounded-sm py-2"
          prefix={<span className="text-yellow i-carbon-user mr-1"></span>}
        ></Input>
        <Input
          placeholder="密码"
          className="rounded-sm py-2"
          prefix={<span className="text-yellow i-carbon-password mr-1"></span>}
        ></Input>
        <div className="flex justify-between items-center">
          <Checkbox className="[&>span>.ant-checkbox-inner]:rounded-sm">
            自动登录
          </Checkbox>
          <a className="text-yellow text-sm" href="/">
            忘记密码
          </a>
        </div>
        <Button type="primary" className="!py-2 !h-[40px] rounded-sm">
          登录
        </Button>
        <footer className="opacity-40 mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </footer>
      </div>
    </div>
  )
}

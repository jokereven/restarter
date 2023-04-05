import CommonHeader from "@/components/CommonHeader"
import { Button, Checkbox, Input } from "antd"
import { useRef } from "react"
import { useNavigate } from "react-router"

const fakeEmail = "a@a.com"
const fakePassword = "123456"

export default function Login() {
  const navigate = useNavigate()

  const email = useRef("")
  const password = useRef("")

  const handleLogin = () => {
    console.log(email.current, password.current)
    if (email.current === "" || password.current === "") {
      alert("邮箱或密码不能为空")
      return
    }

    if (email.current !== fakeEmail || password.current !== fakePassword) {
      alert("邮箱或密码错误")
      return
    }

    window.localStorage.setItem("auth-token", "secret-token")
    navigate("/example/todos")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <CommonHeader size={"lg"} className="mb-14" />
        <div className="flex gap-4 self-start">
          <button className="text-yellow border-b border-yellow pb-2">
            邮箱密码登录
          </button>
          <button disabled className="pb-2">
            邮箱验证登录
          </button>
        </div>
        <Input
          placeholder="邮箱"
          type="email"
          className="rounded-sm py-2"
          prefix={<span className="text-yellow i-carbon-email mr-1"></span>}
          onChange={(e) => {
            email.current = e.target.value
          }}
        ></Input>
        <Input
          placeholder="密码"
          className="rounded-sm py-2"
          prefix={<span className="text-yellow i-carbon-password mr-1"></span>}
          onChange={(e) => {
            password.current = e.target.value
          }}
        ></Input>
        <div className="flex justify-between items-center">
          <Checkbox className="[&>span>.ant-checkbox-inner]:rounded-sm">
            自动登录
          </Checkbox>
          <a className="text-yellow text-sm" href="/">
            忘记密码
          </a>
        </div>
        <Button
          type="primary"
          className="!py-2 !h-[40px] rounded-sm bg-yellow"
          onClick={handleLogin}
          onSubmit={handleLogin}
        >
          登录
        </Button>
        <footer className="opacity-40 mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </footer>
      </div>
    </div>
  )
}

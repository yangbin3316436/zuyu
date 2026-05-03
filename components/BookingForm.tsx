"use client";

import type { FormEvent } from "react";

export default function BookingForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("已收到预约意向，前台将尽快与您确认。");
    event.currentTarget.reset();
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          姓名
          <input name="name" placeholder="请输入称呼" required />
        </label>
        <label>
          电话
          <input name="phone" type="tel" placeholder="用于预约确认" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          到店人数
          <select name="people" defaultValue="1 位">
            <option>1 位</option>
            <option>2 位</option>
            <option>3-4 位</option>
            <option>5 位及以上</option>
          </select>
        </label>
        <label>
          预约项目
          <select name="service" defaultValue="温泉泡汤">
            <option>温泉泡汤</option>
            <option>汗蒸理疗</option>
            <option>足道养护</option>
            <option>芳香SPA</option>
            <option>采耳助眠</option>
            <option>独立客房</option>
            <option>团体接待</option>
          </select>
        </label>
      </div>
      <label>
        备注
        <textarea
          name="message"
          placeholder="可填写预计到店时间、是否需要休息房或停车位"
        />
      </label>
      <button className="btn btn-primary" type="submit">
        提交预约意向
      </button>
      <p className="form-note">
        演示页面不会真实提交信息；正式上线时可接入电话、表单系统或门店小程序。
      </p>
    </form>
  );
}

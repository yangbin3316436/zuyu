"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type BookingDetails = {
  id: string;
  name: string;
  phone: string;
  people: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const timeSlots = [
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
  "00:00",
];

function getLocalDate(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getField(data: FormData, key: string) {
  return String(data.get(key) || "").trim();
}

function saveBooking(booking: BookingDetails) {
  try {
    const saved = window.localStorage.getItem("spaBookings");
    const bookings = saved ? (JSON.parse(saved) as BookingDetails[]) : [];
    window.localStorage.setItem(
      "spaBookings",
      JSON.stringify([booking, ...bookings].slice(0, 5)),
    );
  } catch {
    // Local storage is a convenience only; booking confirmation still shows on screen.
  }
}

export default function BookingForm() {
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [error, setError] = useState("");
  const minDate = getLocalDate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = getField(data, "phone");
    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length < 7) {
      setError("请填写正确的联系电话，方便前台与您确认。");
      setBooking(null);
      return;
    }

    const date = getField(data, "date");
    const time = getField(data, "time");

    if (!date || !time) {
      setError("请选择预约日期和到店时段。");
      setBooking(null);
      return;
    }

    const nextBooking: BookingDetails = {
      id: `TSRJ-${date.replaceAll("-", "")}-${time.replace(":", "")}-${Math.floor(
        100 + Math.random() * 900,
      )}`,
      name: getField(data, "name"),
      phone,
      people: getField(data, "people"),
      service: getField(data, "service"),
      date,
      time,
      message: getField(data, "message"),
    };

    saveBooking(nextBooking);
    setBooking(nextBooking);
    setError("");
    form.reset();
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div>
        <h3>在线预约</h3>
        <p className="booking-intro">提交后请保持电话畅通，前台会按所选时段回电确认。</p>
      </div>
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
          预约日期
          <input name="date" type="date" min={minDate} defaultValue={minDate} required />
        </label>
        <label>
          到店时段
          <select name="time" defaultValue="20:00" required>
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
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
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      {booking ? (
        <div className="booking-confirmation" aria-live="polite">
          <strong>预约已提交</strong>
          <span>预约编号：{booking.id}</span>
          <dl className="booking-details">
            <div>
              <dt>到店时间</dt>
              <dd>
                {booking.date} {booking.time}
              </dd>
            </div>
            <div>
              <dt>预约项目</dt>
              <dd>{booking.service}</dd>
            </div>
            <div>
              <dt>到店人数</dt>
              <dd>{booking.people}</dd>
            </div>
            <div>
              <dt>联系电话</dt>
              <dd>{booking.phone}</dd>
            </div>
          </dl>
        </div>
      ) : (
        <p className="form-note">
          预约信息会保存在本机浏览器中；正式上线时可继续接入短信、后台表单或门店小程序。
        </p>
      )}
    </form>
  );
}

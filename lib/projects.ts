export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  intro: string;
  contentTitle: string;
  items: string[];
  price: string;
  priceUnit: string;
  note: string;
};

export const projects: Project[] = [
  {
    slug: "glam-hostess",
    title: "魅影迎宾礼遇",
    eyebrow: "GLAM HOSTESS",
    image: "/assets/spa-glam-hostess.png",
    alt: "魅影迎宾礼遇",
    intro:
      "适合想要更有排面、更有氛围的到店开场。制服迎宾、热汽长廊、香氛引导和项目介绍，把普通入场变成更有仪式感的会所体验。",
    contentTitle: "项目亮点",
    items: [
      "制服迎宾与到店引导，适合商务接待或朋友局开场。",
      "讲解汤池、汗蒸、SPA、足浴、客房等项目组合。",
      "提供茶水、毛巾、拖鞋、浴服领取提醒。",
      "可协助预留 VIP 茶歇区或护理房时段。",
    ],
    price: "¥88",
    priceUnit: "/ 组",
    note: "礼遇服务仅为迎宾、引导与项目介绍，不包含任何违规服务。",
  },
  {
    slug: "aroma-spa",
    title: "午夜香薰SPA",
    eyebrow: "AROMA SPA",
    image: "/assets/spa-aroma-suite.png",
    alt: "午夜香薰SPA",
    intro:
      "为夜间放松设计的私享护理项目。低照度灯光、香薰精油、热石与草本热敷，把暧昧氛围落在环境和仪式感中。",
    contentTitle: "服务流程",
    items: [
      "入场沐浴与热汤预热，放松身体状态。",
      "香薰精油嗅闻选择，确认偏好与护理时长。",
      "热石、草本热毛巾与肩背舒缓护理。",
      "护理后提供温茶与休憩时间。",
    ],
    price: "¥298",
    priceUnit: "/ 60分钟",
    note: "独立护理房需提前预约，所有服务为正规放松护理。",
  },
  {
    slug: "rose-footcare",
    title: "玫瑰足浴护理",
    eyebrow: "ROSE FOOTCARE",
    image: "/assets/spa-foot-room.png",
    alt: "玫瑰足浴护理",
    intro:
      "花瓣铜盆、暖灯、香氛热毛巾与足道舒缓，适合想要更有仪式感、更放松的泡脚护理体验。",
    contentTitle: "项目内容",
    items: [
      "玫瑰花瓣足浴与草本泡脚。",
      "腿部热毛巾敷护与足底舒缓。",
      "肩颈放松可作为加项预约。",
      "护理后提供温茶与休闲区休息。",
    ],
    price: "¥168",
    priceUnit: "/ 60分钟",
    note: "本项目为正规足浴护理，按时计费、明码标价。",
  },
  {
    slug: "vip-lounge",
    title: "VIP茶歇包间",
    eyebrow: "VIP LOUNGE",
    image: "/assets/spa-vip-lounge.png",
    alt: "VIP茶歇包间",
    intro:
      "天鹅绒沙发、温泉景观、茶台果盘和专人引导，适合夜间朋友局、商务休闲和小型聚会。",
    contentTitle: "包含内容",
    items: [
      "VIP 休闲区 2 小时使用时段。",
      "茶饮、果盘、热毛巾与基础桌面服务。",
      "可叠加足浴、采耳、香薰SPA等项目。",
      "适合 2-6 人小型聚会提前预留。",
    ],
    price: "¥198",
    priceUnit: "/ 2小时",
    note: "节假日与高峰时段建议提前电话确认。",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

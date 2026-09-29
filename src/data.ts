export type TimelineItem = {
  id: string
  date: string
  title: string
  summary: string
  impact: string
}

export type PhotoSample = {
  id: string
  label: string
  meta: string
  image: string
  alt: string
  note: string
}

export const timeline: TimelineItem[] = [
  {
    id: 'SAMPLE 01',
    date: '2023',
    title: '一人小队',
    summary:
      '开始经营摄影账号，从拍摄、后期修图，到账号运营和商务接单，全部由我一个人完成。',
    impact:
      '这是我第一次完整地对一项工作负责，也让我在青岛的摄影赛道里找到了一条自己的小路。',
  },
  {
    id: 'SAMPLE 02',
    date: '2025.07',
    title: '第一次被协同方式震撼',
    summary:
      '在蔚来实习时第一次使用飞书。对于此前长期使用 Office 的我来说，它改变了我对协同工作的理解。',
    impact: '这次体验也悄悄影响了之后选择实习的标准。',
  },
  {
    id: 'SAMPLE 03',
    date: '2026.01',
    title: '从等任务到主动找事情',
    summary:
      '进入飞书商业化市场营销团队，参与 KA 大制造汽车产业链方向的工作。',
    impact:
      '半年里，我从等着 mentor 派任务，慢慢变成会主动寻找事情、补充信息和推进工作的实习生。',
  },
  {
    id: 'SAMPLE 04',
    date: '2026.09',
    title: '再次回到飞书',
    summary: '成为一名 AI 方向的 FDE 实习生，开始搭建 Demo、寻找自己的方案方向。',
    impact: '现在仍在学习，也希望在真实问题里更快地跟上团队的工作节奏。',
  },
]

export const photos: PhotoSample[] = [
  {
    id: 'FRAME 01',
    label: '维港',
    meta: 'CITY / WATER / WIND',
    image: './assets/harbour.jpg',
    alt: '母芸菲站在维港岸边，身后是海面与城市建筑',
    note: '旅行照片也是观察样本：先看光线、环境和人物，再决定这一刻应该怎样被留下。',
  },
  {
    id: 'FRAME 02',
    label: '川西',
    meta: 'WEST SICHUAN / SNOW',
    image: './assets/snow-mountain.jpg',
    alt: '母芸菲站在川西雪山前的旅行照片',
    note: '拍摄时，我习惯先找环境里的关系，再寻找人物最自然的位置。',
  },
  {
    id: 'FRAME 03',
    label: '大理',
    meta: 'DALI / LAKE',
    image: './assets/lakeside.jpg',
    alt: '母芸菲站在大理湖边柳树下，水面上有飞鸟',
    note: '照片不只记录去了哪里，也保留当时的天气、光线和情绪。',
  },
  {
    id: 'FRAME 04',
    label: '釜山',
    meta: 'BUSAN / STREET',
    image: './assets/seoul.jpg',
    alt: '母芸菲在釜山街道上的两张冬日留影',
    note: '街道、动作和一顶红帽子，共同组成一张有记忆点的画面。',
  },
  {
    id: 'FRAME 05',
    label: '首尔',
    meta: 'SEOUL / DUSK',
    image: './assets/nightfall.jpg',
    alt: '母芸菲站在首尔黄昏城市天际线前',
    note: '比起标准答案，我更喜欢保留一点现场的不确定。',
  },
]

export const statusNotes = [
  '杨国福 500g 换周大福 500g，懂行的来',
  '磨有 100 个，而驴只有一只',
  '因为下雨了，所以心情这样潮湿了，但是吃饭的话又笑了呢',
]

export const complaintFlow = [
  '接收妙记或指令',
  '调用受控写表工具',
  '写入「客诉收集」',
  'Base 工作流校验',
  'AI 提取与派单',
  '读取案例库，回答客诉咨询',
]

export const creatorTopics = [
  '达人筛选',
  '内容匹配',
  '投放评估',
  '合作管理',
  '复盘分析',
]

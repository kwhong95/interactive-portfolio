export interface SceneInfo {
  type: "sticky" | "normal";
  heightNum?: number | undefined;
  scrollHeight: number;
  objs: {
    container: any;
    messageA?: any;
    messageB?: any;
    messageC?: any;
    messageD?: any;
    pinB?: any;
    pinC?: any;
  },
  values?: {
    messageA_opacity_in?: any;
    messageB_opacity_in?: any;
    messageC_opacity_in?: any;
    messageD_opacity_in?: any;
    messageA_translateY_in?: any;
    messageB_translateY_in?: any;
    messageC_translateY_in?: any;
    messageD_translateY_in?: any;
    messageA_opacity_out?: any;
    messageB_opacity_out?: any;
    messageC_opacity_out?: any;
    messageD_opacity_out?: any;
    messageA_translateY_out?: any;
    messageB_translateY_out?: any;
    messageC_translateY_out?: any;
    messageD_translateY_out?: any;
  }
}

export const mainSceneInfo: Array<SceneInfo>= [
  {
    type: "sticky",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: null,
      messageA: null,
      messageB: null,
      messageC: null,
      messageD: null
    },
    values: {
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
    }
  },
  {
    type: "normal",
    scrollHeight: 0,
    objs: {
      container: null
    }
  },
  {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: null,
      messageA: null,
      messageB: null,
      messageC: null,
      pinB: null,
      pinC: null,

    },
    values: {
      messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
      messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
      messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
      messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
      messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
      messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
      messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
      messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
      messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
      messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
      messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
    }
  },
  {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: null
    }
  }
]

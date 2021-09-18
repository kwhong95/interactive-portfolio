export interface SceneInfo {
  type: "sticky" | "normal";
  heightNum: number;
  scrollHeight: number;
  objs: {
    container: any;
    messageA?: any;
    messageB?: any;
    messageC?: any;
    messageD?: any;
  },
  values?: {
    messageA_opacity_in: any;
    messageA_opacity_out: any;
    messageA_translateY_in: any;
    messageA_translateY_out: any;
    messageB_opacity_in: any;
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
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
    }
  },
  {
    type: "normal",
    heightNum: 5,
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
      container: null
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

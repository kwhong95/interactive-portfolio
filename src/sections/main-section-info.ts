export interface SceneInfo {
  type: "sticky" | "nornal";
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
    messageA_opacity: any;
    messageB_opacity: any;
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
      messageA_opacity: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity: [0, 1, { start: 0.3, end: 0.4 }],
    }
  },
  {
    type: "nornal",
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

export interface SceneInfo {
  type: "sticky" | "nornal";
  heightNum: number;
  scrollHeight: number;
  objs: {
    container: any;
  }
}

export const mainSceneInfo: Array<SceneInfo> = [
  {
    type: "sticky",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: null
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

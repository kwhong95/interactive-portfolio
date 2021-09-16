export interface SectionInfo {
  type: "sticky" | "nornal";
  heightNum: number;
  scrollHeight: number;
  objs: {
    container: HTMLCollection;
  }
}

export const MainSectionInfo: Array<SectionInfo> = [
  {
    type: "sticky",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: document.getElementsByClassName('.section-0')
    }
  },
  {
    type: "nornal",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.getElementsByClassName('.section-1')
    }
  },
  {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.getElementsByClassName('.section-2')
    }
  },
  {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.getElementsByClassName('.section-3')
    }
  }
]

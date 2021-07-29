## 리액트

---

-   DOM은 트리 구조다
-   DOM을 수정한다는 것 -> 돔은 트리구조이기 때문에 돔 하나 수정을 위해 모든 돔을 뒤져야 한다. 그리고 전부 수정했다.
    -   수정된 노드의 정보를 갖고있는 부모노드가 싹다 수정된다.
-   가상돔의 개념 등장
    -   실제 돔이 아닌 가짜 돔이다.
    -   스냅샷 -> 수정이 일어나면 수정이 필요한 돔만 바꿔끼운다

<br/>

## 라이프사이클

---

컴포넌트의 라이프사이클. 컴포넌트가 렌더링을 준비하는 순간부터, 페이지에섯 사라질 때까지
<br/>

### 생성될때

-   "Rnder" 단계 : constructor -> render
-   "Commit" 단계 : render -> React DOM 및 refs 업데이트 -> componentDidMount

### 업데이트 할 때

-   "Render" 단계 : `setState()`/New Props/부모컴포넌트변경/forceUpdate() -> render
-   "Commit" 단계 : render -> React DOM 및 refs 업데이트 -> componentDidUpdate

### 제거 할 때

내가 보는 화면에서 사라진 경우

-   "Commit" 단계 : componentWillUnmount

<br/>
<br/>

## State 관리

---

-   데이터는 단방향으로만 흐른다 (부모에서 자식으로, 위에서 아래로)

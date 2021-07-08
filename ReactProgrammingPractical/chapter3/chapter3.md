## 3.1. 상태값과 속성값으로 관리하는 UI데이터

-   리액트는 UI 데이터를 관리하는 방법을 제공.
    -   상태값 : 컴포넌트 내부에서 관리
    -   속성값 : 부모 컴포넌트에서 내려줌
-   리액트와 같은 UI 라이브러리를 사용하지 않으면 UI 데이터가 바뀔때마다 돔 요소를 직접 수정해야 한다.
    -   → 비즈니스 로직과 UI 로직이 뒤섞이고, 코드가 보기 어려워짐
-   리액트는 화면을 그리는 모든 코드를 컴포넌트 함수에 선언형으로 작성
    -   리액트가 컴포넌트 함수를 이용해 자동으로 화면을 갱신

### 3.1.1. 리액트를 사용한 코드의 특징

-   로직과 UI코드가 복잡하게 얽혀있다.
-   가독성이 낮아진다
-   리액트로 작성한 코드

    ```jsx
    function MyComponent() {
    	const [desc, setDesc] = useState("");
    	const [currentId, setCurrentId] = useState(1);
    	const [todoList, setTodoList] = useState([]);

    	function onAdd() {
    		const todo = { id: currentId, desc };
    		setCurrentId(currentId + 1);
    		setTodoList([...todoList, todo]);
    	}

    	function onDelete() {
    		const id = Number(e.target.dataset.id);
    		const newTodoList = todoList.filter(todo => todo.id !== id);
    		setTodoList(newTodoList);
    	}

    	function onSaveToServer {
    		// todoList 전송
    	}

    	return (
    			...jsx elements
    	)
    }
    ```

    -   컴포넌트가 반환하는 값은 화면에 무엇을 그려야 하느지 설명하는 UI 코드
    -   UI 코드는 할 일을 추가하고 삭제하는 코드와 분리되어 있다.

-   리액트는 상태값이 수정되면 컴포넌트 함수를 실행해서 화면을 갱신할 수 있음.
-   선언형 프로그래밍
    -   무엇을 그리는지만 나타내기 때문에 다양한 방식으로 그릴 수 있음
    -   모바일 네티이브의 UI도 표현이 가능하다
    -   추상화 단계가 높다 → 비즈니스 로직에 좀 더 집중할 수 있다.

### 3.1.2. 컴포넌트의 속성값과 상탯값

-   속성값과 상태값으로 관리하는 데이터

    -   상태값 : 해당 컴포넌트가 관리하는 데이터
    -   속성값 : 부모 컴포넌트로부터 전달받은 데이터
    -   반드시 이 둘**[상태값, 속성값]**로 UI 데이터를 관리해야 한다
        -   그렇지 않으면 UI데이터가 변경돼도 화면이 갱신되지 않을 수 있다.

    ```jsx
    let color = "red";
    function MyComponent() {
    	funciton onClick() {
    		color = "blue";   // 리액트가 UI 데이터가 변경된 사실을 모른다.
    	}

    	return (
    		<button style={{...}} onClick={onClick}>
    			좋아요
    		</button>
    	)
    }
    ```

    -   컴포넌트에 상태값을 추가할 때는 `useState` 훅을 사용
        -   인자 : 초기값
        -   반환하는 첫번째 원소 : 상태값, 두번째 원소 : 상태값 변경 함수
        -   배열 비구조화 문법을 자주 사용한다.
    -   상태값 변경 함수를 호출 → 상태값 변경 → 해당 컴포넌트를 다시 렌더링
    -   속성값은 부모 컴포넌트가 전달해주는 데이터

        -   대부분의 경우 UI 데이터를 포함한다.

        ```jsx
        function Title(props) {
        	return <p>{props.title}</p>;
        }
        ```

        -   title 속성값을 부모로부터 내려받아 UI 데이터를 구성한다

    ```jsx
    function Todo() {
    	const [count, setCount] = useState(0);
    	function onClick() {
    		setCount(count + 1);
    	}

    	return (
    		<div>
    			<Title title={`현재 카운트 : ${count}`} />
    			<button onClick={onClick}>증가</button>
    		</div>
    	);
    }
    ```

    -   버튼을 클릭할때마다 상태값을 변경 → Todo 컴포넌트는 다시 렌더링
    -   이때 Title 컴포넌트는 새로운 `title` 속성값을 내려받음
        -   상위 컴포넌트의 state를 prop으로 내려받았다
    -   만약 `title` 속성값이 변할때만 렌더링되길 원한다면 `React.memo` 를 사용

        ```jsx
        function Title(props) {
        	return <p>{props.title}</p>;
        }

        export default React.memo(Title);
        ```

        -   memo 함수의 인수로 컴포넌트를 입력 → 컴포넌트의 '속성값'이 변경되는 경우에만 렌더링

-   불변 객체로 관리하는 속성값과 상태값
    -   속성값은 불변(immutable)이지만 상태값은 불변 함수가 아니다.
        -   하지만 상태값도 불변으로 관리하는 것이 좋다.
        -   속성값은 불변이기에 변경하려 시도하면 에러가 발생
    -   상태값은 직접 수정이 가능하다 → 직접 수정은 가능하지만 화면은 갱신되지 않는다.
        -   이전 상태값과 단순 비교로 판단하기 때문

### 3.1.3. 컴포넌트 함수의 반환값

-   HTML에 정의된 거의 모든 태그
-   문자열과 숫자
-   배열 → 각 리액트 요소는 `key` 속성을 가지고 있어야 한다
-   `fragment` : 배열을 사용하지 않고도 여러 요소를 표현할 수 있다.
    -   `key` 속성도 부여할 필요 없음
-   `null` 혹은 `boolean` 을 반환하면 아무것도 렌더링 하지 않는다
-   리액트 포털을 사용하면 컴포넌트의 현재 위치와는 상관없이 특정 돔 요소에 렌더링 가능

    ```jsx
    function Modal({ title, desc }) {
    	const domNode = document.getElementById("modal");
    	return ReactDOM.createPortal(
    		<div>
    			<p>{title}</p>
    			<p>{desc}</p>
    		</div>,
    		domNode
    	);
    }
    ```

    -   `ReactDOM.createPortal()` 을 사용한 코드
    -   특정 돔 요소에 리액트 요소를 렌더링 할 수 있다. ⇒ 요소 바꿔치기가 가능
    -   `Modal` 컴포넌트가 생성된 위치와는 상관 없음

---

## 3.2. 리액트 요소와 가상 돔

-   리액트 요소(element)는 리액트가 UI를 표현하는 수단
    -   리액트가 내부적으로 어떻게 동작하는지 알 수 있다.
-   리액트는 렌더링 성능을 위해 '가상 돔'을 활용
    -   브라우저에서 돔을 변경하는 것은 무거운 작업 → 빠른 렌더링을 위해 돔 변경을 최소화 해야 한다.
    -   리액트는 메모리에 가상 돔을 올려 놓고 이전과 이후의 가상 돔을 비교 → 변경된 부분만 실제 돔에 반영

### 3.2.1. 리액트 요소 이해하기

-   `createElement` 함수는 리액트 요소를 반환. 대부분의 컴포넌트 함수는 리액트 요소를 반환한다.

    ```jsx
    const element = <a href="https://google.com">click here</a>;

    {
    	type: 'a',
    	key: 'key1',
    	ref: null,
    	props: {
    		href: 'https://google.com',
    		style: {
    			width: 100,
    		},
    		children: 'click here'
    	}
    }
    ```

    -   이런 식으로 리액트 요소가 구성되어 있다.
    -   type은 문자열일 경우 HTML 요소이고, 커스텀 컴포넌트의 경우 함수가 들어가므로 호출해서 충분한 정보를 얻을 수 있다.
    -   리액트 요소는 불변 객체이므로 속성값을 변경할 수 없다
        -   변동사항은 새로운 리액트 요소를 이전의 리액트 요소와 비교 → 변경사항이 발생한 부분만 실제 돔에 반영

### 3.2.2. 리액트 요소가 돔 요소로 만들어지는 과정

-   여러개의 리액트 요소가 트리 구조로 구성
    -   리액트 요소의 `props > children` 에 자식 컴포넌트가 들어가는 구조
    -   `type` 프로퍼티의 값이 함수라면 바로 실제 돔으로 만들 수 없음.
        -   모든 type 속성값이 문자열이어야만 실제 돔으로 만들 수 있다
        -   따라서 모든 컴포넌트 함수들이 호출됨.
-   리액트 요소 트리는 시간에 따라 변화하는 화면의 한 순간을 나타냄
-   화면 업데이트 단계
    1. 렌더 단계 (render phase)
        - 돔에 반영할 변경 사항을 파악하는 단계
        - 가상 돔을 만들고 이전 가상 돔과 비교
    2. 커밋 단계 (commit phase)
        - 파악된 변경 사항을 실제 돔에 반영하는 단계
        - 가상 돔을 이용한다
-   가상 돔(Virtual DOM) : 실제 돔을 만들 수 있는 '리액트 요소 트리'
    -   실제 돔에 반영할 내용을 결정하는 단계를 '렌더'
-   렌더 단계는 `ReactDOM.render` 함수와 상태값 변경 함수에 의해 시작
-   엄밀히 말하면 리액트 요소는 'fiber'라는 구조체로 변환된다
    -   fiber로 동작할 때도 모든 구성요소의 type 값이 문자열이 될때까지 연산 → 실제 돔에 반영한다

---

## 3.3. 리액트 훅 기초 익히기

-   훅은 함수형 컴포넌트에 기능을 추가할 때 사용하는 함수
-   상태값을 사용할 수 있고, 자식 요소에 접근할 수도 있음

### 3.3.1. 상태값 추가하기 : useState

-   배치로 처리되는 상탯값 변경 함수

    -   `useState` 훅이 반환하는 배열의 두번째 원소 '상태값 변경 함수'
    -   상태값 변경 함수가 호출되면 해당 컴포넌트를 다시 그린다.
        -   그 과정에서 자식 컴포넌트도 같이 렌더링
    -   리액트는 가능하다면 상태값 변경을 배치(batch)로 처리한다.

        ```jsx
        function MyComponent() {
        	const [count, setCount] = useState({ value: 0 });
        	function onClick() {
        		setCount({ value: count.value + 1 }); //  batch로 처리
        		setCount({ value: count.value + 1 }); //  batch로 처리
        	}

        	console.log("render called");

        	return (
        		<div>
        			<h2>{count.value}</h2>
        			<button onClick={onClick}>증가</button>
        		</div>
        	);
        }
        ```

        -   상태값 변경 함수를 연속으로 호출
        -   `count.value` 상태값을 두번 증가시키려 했지만 의도와 달리 한번만 증가한다
            -   상탯값 변경 함수가 비동기로 동작하기 때문
        -   동기로 처리할 경우 상탯값 변경 함수가 호출될 때마다 화면을 다시 그림 → 성능 이슈가 있다.
            -   그렇다고 매번 화면을 다시 안그리면 UI 데이터와 화면 간의 불일치 → 혼란

-   상탯값 변경 함수에 함수 입력하기

    -   상탯값 변경 함수의 인수로 함수를 입력할 수 있다.

        ```jsx
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        ```

        -   자신이 호출되기 직전의 상탯값을 매개변수로 받음 → 첫번째 호출에서 변경된 상탯값이 두 번째 호출의 인수로 사용
        -   이렇게 하면 상탯값이 제대로 2 더해진다

-   호출 순서가 보장되는 상탯값 변경 함수
    -   호출 순서대로 상탯값이 변경됨
-   `useState` 훅 하나로 여러 상탯값 관리하기
    -   클래스형 컴포넌트의 `setState` 함수와는 다르게 이전 상탯값을 덮어쓴다.
    -   객체에 여러 상탯값을 담아서 관리하면 `useState` 훅 하나로도 여러 상탯값 관리가 가능하다.
    -   객체이기 때문에 여러 상탯값을 합치려면 `...` 전개 연산자를 사용해 합치면 된다.
    -   상탯값을 하나의 객체로 관리할 때는 `useReducer` 훅을 사용하는게 더 좋다
-   상탯값 변경이 배치로 처리되지 않는 경우

    -   리액트는 내부에서 관리하는 이벤트 처리 함수에 대해서만 상탯값 변경을 배치로 처리

        ```jsx
        function MyComponent() {
        	const [count, setCount] = useState(0);
        	useEffect(() => {
        		function onClick() {
        			setCount(prev => prev + 1);
        			setCount(prev => prev + 1);
        		}
        		window.addEventListener("click", onClick);
        		return () => window.removeEventListener("click", onClick);
        	}, []);
        	console.log("render called");
        	...
        }
        ```

        -   `window` 객체에 이벤트리스너를 붙임
        -   리액트 요소에 등록되지 않은 이벤트 처리 함수는 리액트 내부에서 관리되지 않는다.
        -   리액트 외부에 등록된 이벤트 처리 함수 `onClick` 에서 상탯값 변경 ⇒ 배치로 처리되지 않는다.
        -   로그가 두번 찍힘

    -   `unstable_batchedUpdates` 를 사용하면 `onClick` 을 배치로 동작하도록 바꿀 수 있다.
        -   불안정한 API

### 3.3.2. 컴포넌트에서 부수 효과 처리하기 : useEffect

-   부수 효과 : 함수 실행 시 함수 외부의 상태를 변경하는 연산

    -   렌더링 결과가 실제 돔에 반영된 후 호출
    -   '컴포넌트'가 사라지기 직전에 마지막으로 호출 (return)

    ```jsx
    functon MyComponent() {
    	const [count, setCount] = useState(0);

    	useEffect(() => {
    		document.title = `업데이트 횟수 : ${count}`;
    	});

    	return <button onClick={() => setCount(count + 1)}> increase </button>;
    ```

    -   버튼을 클릭할 때마다 다시 렌더링 (상태값이 변경돼서)
    -   렌더링이 끝나면 부수 효과 함수 호출

-   컴포넌트에서 API 호출하기

    ```jsx
    const [user, setUser] = useState(null);

    useEffect(() => {
    	getUserApi(userId).then((data) => setUser(data));
    }, [userId]);
    ```

    -   `user` 는 API 결과값을 저장할 상태값
    -   부수효과 함수에서 API 통신 → 받아온 데이터는 `user` 상태값에 저장
        -   부수효과는 렌더링 할때마다 호출되기 때문에 API 통신을 불필요하게 많이 한다
        -   두번째 매개변수(의존성 배열)을 입력
        -   배열의 값이 변경되는 경우에만 함수가 호출 (렌더링 과정에서 상태값이 변하는지 보고, commit 여부와 관계 없이 상태값 변경 여부만 본다)
    -   대개는 의존성 배열을 입력할 필요가 없다 (많은 버그를 유발함)

-   이벤트 처리 함수를 등록하고 해제하기

    ```jsx
    function WidthPrinter() {
    	const [width, setWidth] = useState(window.innerWidth);

    	useEffect(() => {
    		const onResize = () => setWidth(window.innerWidth);
    		window.addEventListener('resize', onResize);
    		return () => {
    			window.removeEventListener('resize', onResize);
    		};
    	}, []);

    	return ...;
    }
    ```

    -   부수효과 함수는 함수를 반환할 수 있다.
    -   반환된 함수
        -   부수 효과 함수가 호출되기 직전에 호출
        -   컴포넌트가 사라지기 직전에 마지막으로 호출
    -   따라서, 부수 효과 함수가 반환한 함수는 프로그램이 비정상적으로 종료되지 않는다면 반드시 호출될 것이 보장
    -   의존성 배열을 빈 배열로 하면, 컴포넌트가 생성될 때 부수 효과 함수 호출, 컴포넌트가 사라질 때만 반환된 함수 호출

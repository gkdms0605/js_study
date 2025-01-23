/*
비동기 처리 예제,
setTimeout에서 1000ms를 기다리는 동안
console.log('들어간거 맞아?'); 명령어가 먼저 실행된다.

console.log('잘 들어갔어?');

setTimeout(function() {		// 비동기 함수이기에 Web APIs로 이동. Web APIs는 1000ms를 카운트다운, 콜백함수는 테스크 큐에 대기 상태로 들어감.  
	console.log('똑똑');	// 1000ms 이후, Web APIs가 콜백을 테스크 큐로 보냄. 호출 스택이 비었으므로 이벤트 루프가 태스크 큐에서 콜백 함수를 꺼내 호출 스택으로 보냄.  
}, 1000);

console.log('들어간거 맞아?');

*/

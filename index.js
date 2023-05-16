const checkAll = document.getElementById("checkAll"); //모두 동의 체크 박스
const inputCheck = document.querySelectorAll("input[name=agreement]"); // 모두 동의를 제외한 3개의 체크박스

const service = document.getElementById("termsService"); // 이용 약관 체크 박스
const privacy = document.getElementById("termsPrivacy"); // 개인 정보 체크 박스
const termsLocation = document.getElementById("termsLocation"); // 위치 서비스 체크 박스

const submitButton = document.querySelector("button"); // 확인 버튼
const form = document.querySelector("#form_wrap"); // 데이터를 전송하는 Form

// form.addEventListener("submit", (e) => e.preventDefault()); //새로고침(submit) 되는 것 막음

/* 필수 동의 체크 여부에 따른 Button 활성화 or 비활성화 */
function toggleSubmitButton() {
  if (service.checked && privacy.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

/* 3개의 CheckBox 체크 여부에 따른 모두 동의 CheckBox 체크 or 해제 */
function allInputCheck() {
  if (service.checked && privacy.checked && termsLocation.checked) {
    checkAll.checked = true;
  } else {
    checkAll.checked = false;
  }
}

/* 모두 동의 체크에 따른 CheckBox 전체 체크 or 전체 해제 */
function toggleCheckAll() {
  inputCheck.forEach((checkbox) => {
    checkbox.checked = checkAll.checked;
  });
  submitButton.disabled = !checkAll.checked;
}

/* Button 클릭(submit) 시 data 인출 */
function registerInputCheck(event) {
  const resultInputChecked = {
    privacy: privacy.checked,
    service: service.checked,
    termsLocation: termsLocation.checked,
  };
  return console.log(resultInputChecked);
}

/* 이벤트 발생 */
submitButton.addEventListener("click", registerInputCheck);

inputCheck.forEach((input) =>
  input.addEventListener("change", toggleSubmitButton)
);

inputCheck.forEach((input) => input.addEventListener("change", allInputCheck));

checkAll.addEventListener("change", toggleCheckAll);

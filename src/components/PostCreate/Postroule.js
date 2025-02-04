import { ref } from 'vue';
  
export const editor = ref(null);
export const Title = ref("");
export function setStyle (style)  {
  
  document.execCommand(style);
  focusEditor();
};

export function changeFontSize(size) {
  document.execCommand("fontSize", false, size);
  console.log(size)
  focusEditor();
}
export function setFontColor(color) {
  document.execCommand("foreColor", false, color);
  focusEditor();
}
export function setFontBackground(color) {
  document.execCommand("hiliteColor", false, color);
  focusEditor();
}
export function alignText(align) {
  document.execCommand("justify" + align);
  focusEditor();
}

export const insertImage = (img_url) => {
 // const url = prompt('Enter the URL of the image:');
  const url=img_url
  console.log(  typeof url)
  if (url) {
    console.log(url)
    
    // 이미지 클릭 이벤트를 추가합니다.
    document.execCommand('insertImage', false, url);
    addImageClickEvent();
    focusEditor();
  }
};
async function addImageClickEvent() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.addEventListener('click', async () => {
      sizecontroller.value = true;
      await waitForTrue();
      adjustImageSize(image); // 클릭한 이미지의 크기를 조절하는 함수를 호출합니다.
    });
  });
}
export const sizecontroller=ref(false)
export const x=ref(300)
export const y=ref(300)

function adjustImageSize(image) {
  console.log("sizecontroller")
  console.log(`${x.value},${y.value}`)
  image.style.width = `${x.value}px`; // 이미지의 최대 너비를 설정하여 부모 요소에 맞게 조절합니다.
  image.style.height = `${y.value}px`;   // 이미지의 높이를 자동으로 조절합니다.
}

async function waitForTrue() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (!sizecontroller.value) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}
export const focusEditor = () => {
  if (editor.value) {
  editor.value.focus({ preventScroll: true });
  console.log("focuse")
}
console.log("asdasd")
};







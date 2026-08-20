const storyData = [
  {
    category: "YouTube",
    title: "나의 첫 번째 AI 은행, 카카오뱅크",
    description:
      "금융과 생활을 더 편하고 쉽게, 지금 카카오뱅크 AI를 만나보세요.",
    image: "/src/assets/story/image3.png",
  },
  // {
  //   category: "YouTube",
  //   title: "돈이 굴러가는 스포츠 이야기, 머니 그라운드",
  //   description:
  //     "EP.1 손흥민, '이것'으로 역대 1위 찍었다. 스포츠 뒤에 숨겨진 돈의 흐름, 그 진짜 이야기를 확인해보세요.",
  //   image: "/src/assets/story/image3.png",
  // },
  // {
  //   category: "YouTube",
  //   title: "0세부터 시작하는 카카오뱅크 우리아이통장",
  //   description:
  //     "0세부터 아이 이름으로 부모가 앱에서 간편하게 만들어줄 수 있어요. 거래내역마다 소중한 메시지도 남겨보세요.",
  //   image: "/src/assets/story/image2.png",
  // },
  // {
  //   category: "Brunch",
  //   title: "계좌 번호 무차별 노출? 큰일 날 수 있어요",
  //   description:
  //     "계좌번호를 공개하면 보이스피싱·통장협박 등 범죄에 악용될 수 있어요. 불특정 다수에게 노출하지 말고 피해 시 즉시 은행에 문의해야 해요.",
  //   image: "/src/assets/story/image2.png",
  // },
  // {
  //   category: "Brunch",
  //   title: "내가 받을 수 있는 지원금, 한 번에 찾아보세요",
  //   description:
  //     "카카오뱅크 ‘정부지원금 찾기’를 이용해 보세요. 내 조건에 맞는 지원금을 간편하게 조회·신청하고, 알림을 받을 수 있어요.",
  //   image: "/src/assets/story/image3.png",
  // },
];

function createStoryCard(data) {
  return `
    <article class="story-card">
      <div class="story-card__content">
        <div class="story-card__top">
          <div class="story-card__category">
            <i class="ic ic-youtube"></i>
            <span>${data.category}</span>
          </div>

          <div class="story-card__nav">
            <button type="button" aria-label="이전">
              ←
            </button>
            <button type="button" aria-label="다음">
              →
            </button>
          </div>
        </div>

        <div class="story-card__info">
          <h3>${data.title}</h3>
          <p>${data.description}</p>

          <a href="#" class="story-card__button">
            더 알아보기
          </a>
        </div>
      </div>

      <div class="story-card__image">
        <img
          src="${data.image}"
          alt=""
        />
      </div>
    </article>
  `;
}

const storyList = document.querySelector(".section__4-content");

storyList.innerHTML = storyData.map((data) => createStoryCard(data)).join("");

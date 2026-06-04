// Items Database (with translations, positions, sizes, and custom rotations)
const items = [
  {
    id: "bread_tie",
    name: "빵끈",
    officialName: "트위스트 타이 (Twist Tie)",
    category: "kitchen",
    image: "assets/bread_tie.png",
    description: "식빵이나 빵 봉지 등을 밀봉할 때 흔히 사용하는, 플라스틱이나 종이 내부에 얇은 철사가 들어있는 끈입니다. 모양을 쉽게 변형할 수 있어 케이블 정리나 공예용으로도 널리 쓰입니다.",
    tags: ["빵", "철사", "식빵", "묶는거", "철사끈", "포장"],
    pos: { x: 10, y: 15 },
    size: 130,
    rotation: 15,
    otherDesigns: [
      {
        image: "assets/bread_tie.png",
        officialName: "골드 트위스트 타이 (기본형)",
        description: "가장 클래식한 철사 내장형 골드 컬러 플라스틱 트위스트 타이입니다. 유연하고 변형이 쉬우며 단단히 고정됩니다."
      },
      {
        image: "assets/bread_tie_alt1.png",
        officialName: "무지개 메탈릭 타이",
        description: "다양한 메탈릭 색상 피막을 입혀 화려하게 포장할 수 있도록 만든 트위스트 타이입니다. 주로 선물 포장이나 파티 데코용으로 많이 쓰입니다."
      },
      {
        image: "assets/bread_tie_alt2.png",
        officialName: "내추럴 종이 타이",
        description: "철사 겉면을 플라스틱 대신 재생 종이로 감싸 친환경적인 느낌을 주는 타이입니다. 베이커리나 수제 과자 포장에 자연스러운 멋을 더해줍니다."
      },
      {
        image: "assets/bread_tie_alt3.png",
        officialName: "클립형 케이블 루프",
        description: "한 번 묶으면 고정이 잘 되며, 손쉽게 다시 풀 수 있도록 설계된 원형 플라스틱 및 철사 혼합 형태의 마감용 케이블 루프입니다."
      }
    ]
  },
  {
    id: "egg_carton",
    name: "계란 판 / 계란 곽",
    officialName: "난갑 (Egg Carton / Egg Tray)",
    category: "kitchen",
    image: "assets/egg_carton.png",
    description: "달걀이 깨지지 않도록 충격을 흡수하도록 디자인된 홈이 파여 있는 용기입니다. 주로 투명한 플라스틱(PET)이나 재생 펄프(종이) 재질로 만들어집니다.",
    tags: ["계란", "달걀", "통", "플라스틱", "판", "곽", "껍데기"],
    pos: { x: 30, y: 10 },
    size: 210,
    rotation: 12,
    otherDesigns: [
      {
        image: "assets/egg_carton.png",
        officialName: "펄프 난갑 (기본형)",
        description: "재생 종이 펄프로 만들어진 클래식한 30구 계란 판입니다. 습기 조절과 충격 흡수 능력이 탁월합니다."
      },
      {
        image: "assets/egg_carton_alt1.png",
        officialName: "친환경 재생종이 6구 팩",
        description: "재생 펄프를 압착하여 만든 소량 포장용 6구 계란 상자입니다. 뚜껑이 일체형으로 디자인되어 유통과 보관이 편리하고 환경에 무해합니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "펄프 난갑 (디자인 C)",
        description: "습기 보존과 충격 방지에 우수한 친환경 펄프 재질의 계란 전용 트레이입니다."
      },
      {
        image: "assets/egg_carton.png",
        officialName: "펄프 난갑 (디자인 D)",
        description: "달걀의 크기와 신선도를 안전하게 유지해주는 견고한 격자형 계란 판 구조입니다."
      }
    ]
  },
  {
    id: "ship_helm",
    name: "배 키 / 배 운전대",
    officialName: "타륜 (Helm / Ship's Wheel)",
    category: "misc",
    image: "assets/ship_helm.png",
    description: "선박의 방향타를 조종하여 배의 진행 방향을 바꾸는 바퀴 모양의 장치입니다. 클래식한 목재 바퀴 디자인에 황동 장식이 들어간 모습이 대표적입니다.",
    tags: ["배", "운전대", "선장", "키", "바퀴", "바다"],
    pos: { x: 74, y: 12 },
    size: 190,
    rotation: 10,
    otherDesigns: [
      {
        image: "assets/ship_helm.png",
        officialName: "클래식 목재 타륜 (기본형)",
        description: "선박의 방향타를 조종하여 배의 진행 방향을 바꾸는 바퀴 모양의 장치입니다. 클래식한 목재 바퀴 디자인에 황동 장식이 들어간 모습이 대표적입니다."
      },
      {
        image: "assets/ship_helm.png",
        officialName: "목재 타륜 (디자인 B)",
        description: "클래식 선박의 고유한 조타륜 디자인으로, 8개의 살과 튼튼한 중앙 허브를 가집니다."
      },
      {
        image: "assets/ship_helm.png",
        officialName: "목재 타륜 (디자인 C)",
        description: "원목 핸들 그립이 적용되어 빈티지한 느낌을 자아내는 목조 보트 조타 키입니다."
      },
      {
        image: "assets/ship_helm.png",
        officialName: "목재 타륜 (디자인 D)",
        description: "오래된 범선이나 복고풍 인테리어 장식에 널리 쓰이는 정통 타륜 스타일 조타 장치입니다."
      }
    ]
  },
  {
    id: "paper_shreds",
    name: "선물 상자 종이 스타핑",
    officialName: "페이퍼 슈레드 / 스타핑 (Paper Shreds)",
    category: "office",
    image: "assets/paper_shreds.png",
    description: "선물 상자나 포장 상자 내부에 물건이 흔들리거나 파손되는 것을 막기 위해 가득 채워 넣는 꼬불꼬불한 종이 완충재입니다. 다양한 색상이 있어 데코용으로도 사용됩니다.",
    tags: ["선물", "상자", "종이", "완충재", "포장", "완충", "스타핑"],
    pos: { x: 24, y: 45 },
    size: 190,
    rotation: 0,
    otherDesigns: [
      {
        image: "assets/paper_shreds.png",
        officialName: "지그재그 페이퍼 스타핑 (기본형)",
        description: "선물 상자나 포장 상자 내부에 물건이 흔들리거나 파손되는 것을 막기 위해 가득 채워 넣는 꼬불꼬불한 종이 완충재입니다. 다양한 색상이 있어 데코용으로도 사용됩니다."
      },
      {
        image: "assets/paper_shreds.png",
        officialName: "페이퍼 슈레드 (디자인 B)",
        description: "선물의 미관을 높이고 물건의 흔들림을 완벽하게 방지하는 쿠션용 페이퍼 완충재입니다."
      },
      {
        image: "assets/paper_shreds.png",
        officialName: "페이퍼 슈레드 (디자인 C)",
        description: "선물 포장의 공간을 메우며 자연스러운 쿠션감을 제공하는 지그재그 종이 스타핑입니다."
      },
      {
        image: "assets/paper_shreds.png",
        officialName: "페이퍼 슈레드 (디자인 D)",
        description: "포장의 퀄리티를 한 단계 높여주는 가볍고 다채로운 색감의 종이 완충 필러입니다."
      }
    ]
  },
  {
    id: "pizza_saver",
    name: "피자 삼발이 / 피자 고정핀",
    officialName: "피자 세이버 (Pizza Saver)",
    category: "kitchen",
    image: "assets/pizza_saver.png",
    description: "피자 배달 중 상자 뚜껑이 피자의 치즈와 토핑에 눌러붙거나 가라앉는 것을 방지하기 위해 피자 한가운데에 꽂아두는 플라스틱 지지대입니다. 1983년 카멜라 비탈레(Carmela Vitale)가 발명했습니다.",
    tags: ["피자", "삼발이", "플라스틱", "지지대", "가운데", "고정"],
    pos: { x: 60, y: 40 },
    size: 160,
    rotation: -15,
    otherDesigns: [
      {
        image: "assets/pizza_saver.png",
        officialName: "3발 피자 세이버 (기본형)",
        description: "피자 배달 중 상자 뚜껑이 피자의 치즈와 토핑에 눌러붙거나 가라앉는 것을 방지하기 위해 피자 한가운데에 꽂아두는 플라스틱 지지대입니다."
      },
      {
        image: "assets/pizza_saver_alt1.png",
        officialName: "사각 4발 피자 세이버",
        description: "지지력을 더 높이기 위해 4개의 다리와 사각형 상판 구조로 설계된 피자 세이버입니다. 대형 피자나 토핑이 무거운 시카고 피자 등에 유용합니다."
      },
      {
        image: "assets/pizza_saver.png",
        officialName: "3발 피자 세이버 (디자인 C)",
        description: "피자 뚜껑과의 마찰을 고르게 분산하여 배달 중 형태가 무너지는 것을 완벽히 방지하는 핀입니다."
      },
      {
        image: "assets/pizza_saver.png",
        officialName: "3발 피자 세이버 (디자인 D)",
        description: "일반적으로 널리 쓰이는 흰색 플라스틱 재질의 삼발이 고정용 피자 세이버 구조입니다."
      }
    ]
  },
  {
    id: "thatch_roll",
    name: "짚 말이 / 미니 울타리",
    officialName: "김발 (Makisu) 또는 장식용 대나무발",
    category: "misc",
    image: "assets/thatch_roll.png",
    description: "초밥이나 김밥 등을 동그랗게 말 때 사용하는 대나무로 만든 발입니다. 혹은 요리 장식(쯔마)이나 미니 정원 조경용의 작은 짚/나무 울타리로도 쓰입니다.",
    tags: ["김밥", "말이", "대나무", "발", "울타리", "나무", "짚"],
    pos: { x: 12, y: 72 },
    size: 160,
    rotation: -30,
    otherDesigns: [
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (기본형)",
        description: "초밥이나 김밥 등을 동그랗게 말 때 사용하는 대나무로 만든 발입니다. 혹은 요리 장식(쯔마)이나 미니 정원 조경용의 작은 짚/나무 울타리로도 쓰입니다."
      },
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (디자인 B)",
        description: "얇은 대나무 살들을 실로 촘촘히 엮어 만든 김밥 조리 필수 보조 도구입니다."
      },
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (디자인 C)",
        description: "일정한 힘을 고르게 전달하여 음식의 모양을 동그랗게 잡아주는 조리 도구입니다."
      },
      {
        image: "assets/thatch_roll.png",
        officialName: "대나무 김발 (디자인 D)",
        description: "친환경 대나무 재질로 음식이 달라붙지 않고 손쉽게 마감할 수 있는 롤링 발입니다."
      }
    ]
  },
  {
    id: "sea_mine",
    name: "가시 달린 바다 폭탄",
    officialName: "기뢰 (Naval Mine / Sea Mine)",
    category: "misc",
    image: "assets/sea_mine.png",
    description: "물속에 설치하여 함선이 접근하거나 접촉했을 때 폭발하도록 만든 자동 폭발식 무기입니다. 외부에 솟아있는 돌기(촉각)에 부딪치면 내부 신관이 작동하여 터집니다.",
    tags: ["폭탄", "바다", "가시", "기뢰", "철구", "군사"],
    pos: { x: 45, y: 70 },
    size: 170,
    rotation: 0,
    otherDesigns: [
      {
        image: "assets/sea_mine.png",
        officialName: "촉각식 계류기뢰 (기본형)",
        description: "물속에 설치하여 함선이 접근하거나 접촉했을 때 폭발하도록 만든 자동 폭발식 무기입니다. 외부에 솟아있는 돌기(촉각)에 부딪치면 내부 신관이 작동하여 터집니다."
      },
      {
        image: "assets/sea_mine.png",
        officialName: "계류기뢰 (디자인 B)",
        description: "특유의 가시 달린 구형 철골 구조로 수중에 고정되어 선박을 격침시키는 고전식 기뢰입니다."
      },
      {
        image: "assets/sea_mine.png",
        officialName: "계류기뢰 (디자인 C)",
        description: "바다 속 깊이에 따라 체인을 이용해 계류해 놓는 충격 격침용 해상 무기입니다."
      },
      {
        image: "assets/sea_mine.png",
        officialName: "계류기뢰 (디자인 D)",
        description: "해군 작전 및 항만 방어에 주로 사용되는 파괴력이 강력한 자동 폭발 장치입니다."
      }
    ]
  },
  {
    id: "sushi_grass",
    name: "초밥 초록색 플라스틱 풀",
    officialName: "바란 (Baran / Sushi Grass)",
    category: "kitchen",
    image: "assets/sushi_grass.png",
    description: "초밥이나 일본식 도시락(벤토)에서 음식 간에 냄새가 섞이거나 마르는 것을 막고, 시각적인 장식을 위해 끼워 넣는 인조 플라스틱 풀 장식입니다. 원래는 엽란이라는 실제 식물 잎을 잘라 썼던 것에서 유래했습니다.",
    tags: ["초밥", "도시락", "풀", "초록색", "플라스틱", "바란", "장식"],
    pos: { x: 66, y: 72 },
    size: 200,
    rotation: -8,
    otherDesigns: [
      {
        image: "assets/sushi_grass.png",
        officialName: "플라스틱 인조 바란 (기본형)",
        description: "초밥이나 일본식 도시락(벤토)에서 음식 간에 냄새가 섞이거나 마르는 것을 막고, 시각적인 장식을 위해 끼워 넣는 인조 플라스틱 풀 장식입니다."
      },
      {
        image: "assets/sushi_grass.png",
        officialName: "인조 바란 (디자인 B)",
        description: "음식물 사이를 위생적으로 구분해주며 산뜻한 데코레이션 효과를 주는 초록색 인조 바란입니다."
      },
      {
        image: "assets/sushi_grass.png",
        officialName: "인조 바란 (디자인 C)",
        description: "초밥이나 롤 포장 등에서 간장이나 반찬의 섞임을 효과적으로 막아주는 구획 장식입니다."
      },
      {
        image: "assets/sushi_grass.png",
        officialName: "인조 바란 (디자인 D)",
        description: "일본 전통 도시락 문화에서 유래하여 음식의 고유한 향 and 수분을 보존하는 데 쓰이는 장치입니다."
      }
    ]
  }
];

// App State
let activePage = 1;
let currentCategory = "all";
let isSearching = false;

// DOM Elements
const binderPage = document.getElementById('binder-page');
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const itemsContainerP1 = document.getElementById('items-container-p1');
const binderRingsContainer = document.getElementById('binder-rings');

const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const searchDropdown = document.getElementById('search-dropdown');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Modals
const detailModal = document.getElementById('detail-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalImg = document.getElementById('modal-item-img');
const modalCommonName = document.getElementById('modal-common-name');
const modalOfficialName = document.getElementById('modal-official-name');
const modalDescription = document.getElementById('modal-description');
const modalTagsContainer = document.getElementById('modal-tags');

const uploadBtn = document.getElementById('upload-btn');
const uploadModal = document.getElementById('upload-modal');
const uploadCloseBtn = document.getElementById('upload-close-btn');
const uploadForm = document.getElementById('upload-form');
const uploadDropzone = document.getElementById('upload-dropzone');

const logoButton = document.getElementById('logo-button');
const suggestBtn = document.getElementById('suggest-btn');

const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const infoCloseBtn = document.getElementById('info-close-btn');

// Initialize Application
function init() {
  generateRings();
  renderItems();
  setupEventListeners();
}

// Generate Binder Rings Dynamically
function generateRings() {
  const ringCount = 15;
  binderRingsContainer.innerHTML = '';
  for (let i = 0; i < ringCount; i++) {
    const ring = document.createElement('div');
    ring.className = 'binder-ring';
    binderRingsContainer.appendChild(ring);
  }
}

// Render Items on Page 1
function renderItems() {
  itemsContainerP1.innerHTML = '';
  items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'interactive-item';
    itemEl.id = `item-${item.id}`;
    
    // Style settings for absolute positioning and rotation
    itemEl.style.left = `${item.pos.x}%`;
    itemEl.style.top = `${item.pos.y}%`;
    itemEl.style.width = `${item.size}px`;
    itemEl.style.transform = `rotate(${item.rotation}deg)`;
    
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-img" draggable="false">
    `;
    
    // Clicking an item opens its details
    itemEl.addEventListener('click', () => {
      openDetailModal(item);
    });
    
    itemsContainerP1.appendChild(itemEl);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Search Input Events
  searchInput.addEventListener('input', handleSearch);
  searchClearBtn.addEventListener('click', clearSearch);
  
  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-bar-container')) {
      searchDropdown.classList.add('hidden');
    }
  });

  // Modal Close Events
  modalCloseBtn.addEventListener('click', closeDetailModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeDetailModal();
  });
  
  // Upload Modal Events
  uploadBtn.addEventListener('click', openUploadModal);
  uploadCloseBtn.addEventListener('click', closeUploadModal);
  uploadModal.addEventListener('click', (e) => {
    if (e.target === uploadModal) closeUploadModal();
  });
  
  // Form submission
  uploadForm.addEventListener('submit', handleUploadSubmit);
  
  // Drag and Drop simulation for upload dropzone
  uploadDropzone.addEventListener('click', () => {
    alert('이미지 업로드 기능은 현재 프로토타입 시뮬레이션 모드입니다.');
  });

  // Navigation Button Events
  prevBtn.addEventListener('click', () => navigatePage(-1));
  nextBtn.addEventListener('click', () => navigatePage(1));
  
  // Suggest Button (Coming soon page)
  suggestBtn.addEventListener('click', () => {
    closeDetailModal();
    openUploadModal();
  });

  // Index Tab Events
  const tabButtons = document.querySelectorAll('.tab-item');
  tabButtons.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      filterByCategory(category);
    });
  });

  // Logo Button
  logoButton.addEventListener('click', () => {
    clearSearch();
    filterByCategory('all');
    document.querySelectorAll('.tab-item').forEach((tab, index) => {
      if (index === 0) tab.classList.add('active');
      else tab.classList.remove('active');
    });
    if (activePage !== 1) {
      navigatePage(-1);
    }
  });

  // Info Modal Events
  infoBtn.addEventListener('click', () => {
    infoModal.classList.remove('hidden');
  });
  infoCloseBtn.addEventListener('click', () => {
    infoModal.classList.add('hidden');
  });
  infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) infoModal.classList.add('hidden');
  });

  // ESC key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeUploadModal();
      infoModal.classList.add('hidden');
    }
  });
}

// Open Detail Modal with Item Info
function openDetailModal(item) {
  const modalImgContainer = document.querySelector('.modal-img-container');
  modalImg.src = item.image;
  modalImg.alt = item.name;
  modalCommonName.textContent = item.officialName;
  modalOfficialName.textContent = item.name;
  modalDescription.textContent = item.description;
  
  // Build tags
  modalTagsContainer.innerHTML = '';
  item.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.className = 'tag-badge';
    tagEl.textContent = `#${tag}`;
    tagEl.addEventListener('click', () => {
      closeDetailModal();
      searchInput.value = tag;
      handleSearch();
    });
    modalTagsContainer.appendChild(tagEl);
  });
  
  // Build Alternate Designs ("다른 모양들")
  const modalAltSection = document.getElementById('modal-alt-designs-section');
  const modalAltList = document.getElementById('modal-alt-list');
  
  if (item.otherDesigns && item.otherDesigns.length > 1) {
    modalAltList.innerHTML = '';
    
    item.otherDesigns.forEach((design, index) => {
      const altItem = document.createElement('div');
      altItem.className = 'modal-alt-item';
      if (index === 0) altItem.classList.add('active');
      
      altItem.innerHTML = `
        <img src="${design.image}" alt="${design.officialName}" draggable="false">
      `;
      
      altItem.addEventListener('click', () => {
        if (altItem.classList.contains('active')) return;
        
        // Update active class
        const activeItems = modalAltList.querySelectorAll('.modal-alt-item');
        activeItems.forEach(el => el.classList.remove('active'));
        altItem.classList.add('active');
        
        // Swap image and content with a smooth transition
        modalImgContainer.style.opacity = '0';
        setTimeout(() => {
          modalImg.src = design.image;
          modalImg.alt = design.officialName;
          modalCommonName.textContent = design.officialName;
          modalOfficialName.textContent = item.name;
          modalDescription.textContent = design.description;
          modalImgContainer.style.opacity = '1';
        }, 150);
      });
      
      modalAltList.appendChild(altItem);
    });
    
    modalAltSection.classList.remove('hidden');
  } else {
    modalAltSection.classList.add('hidden');
  }
  
  // Reset modal scroll to top when opening
  const modalCard = document.querySelector('.modal-card');
  if (modalCard) modalCard.scrollTop = 0;
  
  detailModal.classList.remove('hidden');
}

function closeDetailModal() {
  detailModal.classList.add('hidden');
}

// Upload Modal Functions
function openUploadModal() {
  uploadModal.classList.remove('hidden');
}

function closeUploadModal() {
  uploadModal.classList.add('hidden');
  uploadForm.reset();
}

function handleUploadSubmit(e) {
  e.preventDefault();
  alert('제보해 주셔서 감사합니다! 검토 후 도감에 등록하겠습니다.');
  closeUploadModal();
}

// Search Filtering Logic
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    clearSearch();
    return;
  }
  
  isSearching = true;
  searchClearBtn.classList.add('visible');
  
  const matchedItems = [];
  
  items.forEach(item => {
    const isMatch = 
      item.name.toLowerCase().includes(query) ||
      item.officialName.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query));
      
    const itemEl = document.getElementById(`item-${item.id}`);
    if (itemEl) {
      if (isMatch) {
        itemEl.classList.remove('dimmed');
        itemEl.classList.add('highlighted');
        matchedItems.push(item);
      } else {
        itemEl.classList.remove('highlighted');
        itemEl.classList.add('dimmed');
      }
    }
  });

  // Render dropdown suggestions
  renderSearchDropdown(matchedItems);
  
  // If we search, make sure we show page 1
  if (activePage !== 1 && matchedItems.length > 0) {
    navigatePage(-1);
  }
}

function clearSearch() {
  searchInput.value = '';
  searchClearBtn.classList.remove('visible');
  searchDropdown.classList.add('hidden');
  isSearching = false;
  
  // Restore all items opacity and positions
  items.forEach(item => {
    const itemEl = document.getElementById(`item-${item.id}`);
    if (itemEl) {
      itemEl.classList.remove('dimmed', 'highlighted');
    }
  });
  
  // Re-apply current category filter if active
  if (currentCategory !== 'all') {
    filterByCategory(currentCategory);
  }
}

function renderSearchDropdown(matchedItems) {
  if (matchedItems.length === 0) {
    searchDropdown.innerHTML = '<div style="padding: 10px 20px; font-size: 13px; color: var(--text-muted);">검색 결과가 없습니다.</div>';
  } else {
    searchDropdown.innerHTML = '';
    matchedItems.forEach(item => {
      const dropdownItem = document.createElement('div');
      dropdownItem.className = 'search-item';
      dropdownItem.innerHTML = `
        <span class="search-item-title">${item.name}</span>
        <span class="search-item-official">${item.officialName}</span>
      `;
      dropdownItem.addEventListener('click', () => {
        openDetailModal(item);
        searchInput.value = item.name;
        searchDropdown.classList.add('hidden');
        
        // Highlight only this item
        items.forEach(it => {
          const itemEl = document.getElementById(`item-${it.id}`);
          if (itemEl) {
            if (it.id === item.id) {
              itemEl.classList.remove('dimmed');
              itemEl.classList.add('highlighted');
            } else {
              itemEl.classList.remove('highlighted');
              itemEl.classList.add('dimmed');
            }
          }
        });
      });
      searchDropdown.appendChild(dropdownItem);
    });
  }
  searchDropdown.classList.remove('hidden');
}

// Category Filter
function filterByCategory(category) {
  currentCategory = category;
  
  // Reset search
  if (isSearching) {
    searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    searchDropdown.classList.add('hidden');
    isSearching = false;
  }
  
  items.forEach(item => {
    const itemEl = document.getElementById(`item-${item.id}`);
    if (itemEl) {
      itemEl.classList.remove('highlighted');
      if (category === 'all' || item.category === category) {
        itemEl.classList.remove('dimmed');
      } else {
        itemEl.classList.add('dimmed');
      }
    }
  });
  
  if (activePage !== 1) {
    navigatePage(-1);
  }
}

// Page Navigation with flip animation
function navigatePage(direction) {
  let targetPage = activePage + direction;
  if (targetPage < 1) targetPage = 2; // Loop
  if (targetPage > 2) targetPage = 1; // Loop
  
  if (targetPage === activePage) return;
  
  const currentPageEl = document.getElementById(`page-${activePage}`);
  const targetPageEl = document.getElementById(`page-${targetPage}`);
  
  // Apply flip animation class to the binder page
  const animationClass = direction > 0 ? 'page-flip-next' : 'page-flip-prev';
  binderPage.classList.add(animationClass);
  
  // Wait for animation to swap contents
  setTimeout(() => {
    currentPageEl.classList.add('hidden');
    targetPageEl.classList.remove('hidden');
    
    // Remove animation class so we can trigger it again later
    binderPage.classList.remove(animationClass);
    activePage = targetPage;
  }, 300);
}

// Run application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

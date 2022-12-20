
let menulist = [
    {
        url: "/#/dailyquest",
        title: "하루일과",
        text: "기사단 2회(길드출정권이 있다면 5회추천) <br>\
                붉은달 3회 <br>\
                투쟁의탑 1,2  4회씩 <br>\
                니플헤임전투3가지 2회씩 <br>\
                본인스팩에따라 클엘마 아루셀마단(k누른후 시즌3,4체크 밑에 레이드체크)  2회씩 <br>\
                그이후 밀순은 스팩더필요! <br>\
                밀순이 안가질때는 T 메뉴 출정권추출로 10개획득후 앞에레이드 갈것 \
                ",
    },
    {
        url: "/#/encent",
        title: "인챈트",
        img: [				
            "enchant_weapon.jpg",
            "enchant_armor.jpg",
            "enchant_acc.jpg",
            "enchant_rank.png",
        ]
    },
    {
        url: "/#/inyean",
        title: "인연",
        img: [
            "in-yeon.png",
        ]
    },
    {
        url: "/#/emoji",
        title: "인사이드",
        img: [
            "emoji.png",
        ]
    },
    {
        url: "/#/optimization",
        title: "최적화 팁",
        text: `마영전 64bit 클라이언트 최적화 팁입니다. <br>\
                따라하시기만 해도 충분하긴 한데 상세설정은 보실 수 있는 분은 바꿔도 되요 <br>\
                <br>
                Config 파일 셋팅은 인게임 셋팅값이랑 같은거라 전 딱히 만지지는 않고 <br>\
                nVidia 제어판에서 그래픽 옵션은 다 꺼버린 다음에, 인스펙터로 MSAA x4랑 Anisotripic Filter x16만 켰습니다. <br>\
                <br>
                <a target="_blank" href="https://blog.naver.com/pohato/222217252681">https://blog.naver.com/pohato/222217252681</a>`
    },
    {
        url: "/#/jewel",
        title: "보석",
        text: "팔찌 보석별 최소/최대 스텟 <br> \
                1. 루비/에메랄드 보석은 하급 보석으로도 200이상이 뜬다 <br> \
                2. 상급 보석으로 300이상의 옵션이 뜨면 고급 보석작 효율이 떨어짐 <br> \
                3. 보석마다 메인 옵션 외의 나머지 3가지 스텟은 최대 90까지만 뜬다 <br>",
        img: [
            "jewel.png",
        ]
    },
    {
        url: "/#/Dungeon",
        title: "던전",
        text: `<b>던전별 빠전컷</b> <br>
                ● 빠전컷은 공상한에서 -3500 / 크상한-30 / 밸상한-20 / 대항상한-21 정도로 맞춰저있다. (상한 스펙과 비교하면 70:30 정도의 딜지분) <br>
                ● 결사대는 빠전이 아니기에 스펙에 상관없이 입장 가능 <br>
                ● 타로스는 유일하게 입장컷이 상한보다 높다 (공격력. 공해제 적용을 고려한 것으로 추정) <br>
                <img src="./Dungeon1.png">
                <br>
                <br>
                <b>던전별 상한</b> <br>
                ● 대항력은 10당 2.5%의 딜 차이가 발생 <br>
                ● 상한을 치지 않은 기준 깡공or해제 200 = 크리 1 = 밸런 0.8 = 추피 100 으로 환산이 가능하다 <br>
                ● 아인라허, 길드 던전, 인연임무 던전은 모든 스텟을 무시하고 스매시/액티브에 지정된 배율로만 데미지를 계산한다 <br>
                ● 미혹의 탑은 상기한 데미지 계산식에서 공격력만 영향을 받는다 <br>
                <img src="./Dungeon2.png">
                `,
    },
    {
        url: "/#/etcinfo",
        title: "정보",
        text: `
            ◆ 추피와 해제는 1:2로 등가치환된다 (추피100이 높다면 해제200 높은것과 동일) / 단, 공상한을 치지 않았다면 추피가 무조건 우선된다. <br>
            <br>
            ◆ 아르드리 장비로 갈아탈 경우, (15강+노해제 기준) 무기는 해제 400 / 방어구는 해제 160이 낮아져도 추피빨로 딜을 유지가능. <br>
            <br>
            ◆ 해제했다면 결사대/파르홀른 버프로 얻는 해제수치를 제외한 장비 해제가 1/3이 되므로 해제 유지를 위해서는 그만큼 해제를 더 해야함. <br>
            <br>
            ◆ 밀레시안까지는 무기 해제시 소재 상관없이 56이 올랐으나, 아르드리는 봉힘이 70/돌맹이가 72 상승하므로 봉힘의 우선순위가 제일 낮다. <br>
            <br>
            ◆ 크/밸/공속 소합이 전부 끝났다면 그냥 해제 가능한 부위부터 올리는게 효율적이다. <br>
            <br>
            ◆ 방어구는 봉힘이 20, 돌맹이가 10이므로 왠만하면 봉힘 풀소합을 한 뒤 봉힘부터 해제 추천(응발 꼭 달자) <br>
            <br><br><br><br><br><br>
            <b>config_material.txt 설정</b>
            ◆ 프레임 상승 및 렉 제거 <br>
            "mat_vsync"        "0" <br>
            "mat_waterlevel"        "0" <br>
            "r_waterforceexpensive"        "0" <br>
            "r_waterforcereflectentities"        "0" <br>
            "r_drawdecals"        "0" <br>
            "r_drawdetailprops"        "0" <br>
            "r_dynamic"        "0" <br>
            "cl_cloth_physics_mode"        "0" <br>
            "cl_particle_limit"        "0" <br>
            "cl_smooth"        "0" <br>
            "r_shadowrendertotexture"        "0" <br>
            "r_rootlod"        "0" <br>
            "multicore"        "3" <br>
            "threads"        "n" <br>
            (threads의 n은 자신의 cpu의 스레드 갯수)
        `,
    },
]

export default menulist;
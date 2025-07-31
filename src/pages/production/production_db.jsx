import p_1_right from "@/assets/production/product_1/p1_top.jpg"
import icon1 from "@/assets/production/product_1/textileIcon.png"
import icon2 from "@/assets/production/product_1/sewingIcon.png"
import icon3 from "@/assets/production/product_1/textile2Icon.png"

import p_1_top from "@/assets/production/product_db/1/0B0A4753.JPG"
import p_2_top from "@/assets/production/product_db/2/0B0A4569.JPG"
import p_3_top from "@/assets/production/product_db/3/0B0A4662.JPG"
import p_4_top from "@/assets/production/product_db/4/0B0A4640.JPG"

import p_1_1 from "@/assets/production/product_db/1/0B0A4742.JPG"
import p_1_2 from "@/assets/production/product_db/1/0B0A4740.JPG"
import p_1_3 from "@/assets/production/product_db/1/0B0A4785.JPG"
import p_1_4 from "@/assets/production/product_db/1/0B0A4790.JPG"


import p_2_1 from "@/assets/production/product_db/2/0B0A4554.JPG"
import p_2_2 from "@/assets/production/product_db/2/0B0A4723.JPG"
import p_2_3 from "@/assets/production/product_db/2/0B0A4682.JPG"
import p_2_4 from "@/assets/production/product_db/2/0B0A4538.JPG"

import p_3_1 from "@/assets/production/product_db/3/0B0A4664.JPG"
import p_3_2 from "@/assets/production/product_db/3/0B0A4670.JPG"
import p_3_3 from "@/assets/production/product_db/3/0B0A4681.JPG"
import p_3_4 from "@/assets/production/product_db/3/0B0A4828.JPG"


import p_4_1 from "@/assets/production/product_db/4/0B0A4655.JPG"
import p_4_2 from "@/assets/production/product_db/4/0B0A4694.JPG"
import p_4_3 from "@/assets/production/product_db/4/0B0A4832.JPG"
import p_4_4 from "@/assets/production/product_db/4/0B0A4617.JPG"


export const Production_db = (t) => [
    {
        id: 1,
        title_name: t("production.item_1.title_name"),
        top_right: {
            top_img: p_1_top,
            top_img_style: {background: `url(${p_1_top}) bottom no-repeat`, backgroundSize: "contain"},
            subtitle: t("production.item_1.top_right.subtitle"),
            title: t("production.item_1.top_right.title"),
            p: t("production.item_1.top_right.p"),
            list_title: t("production.item_1.top_right.list_title"),
            list: {
                i1: t("production.item_1.top_right.list.i1"),
                i2: t("production.item_1.top_right.list.i2"),
                i3: t("production.item_1.top_right.list.i3")
            }
        },
        top_bottom: {
            i1: {
                icon: icon1,
                title: t("production.item_1.top_bottom.i1.title"),
                subtitle: t("production.item_1.top_bottom.i1.subtitle"),
                p: t("production.item_1.top_bottom.i1.p")
            },
            i2: {
                icon: icon2,
                title: t("production.item_1.top_bottom.i2.title"),
                subtitle: t("production.item_1.top_bottom.i2.subtitle"),
                p: t("production.item_1.top_bottom.i2.p")
            },
            i3: {
                icon: icon3,
                title: t("production.item_1.top_bottom.i3.title"),
                subtitle: t("production.item_1.top_bottom.i3.subtitle"),
                p: t("production.item_1.top_bottom.i3.p")
            }
        },
        tabs: {
            i1: {
                id: 1,
                title: t("production.item_1.tabs.i1.title"),
                tab_img: p_1_1,
                p: t("production.item_1.tabs.i1.p")
            },
            i2: {
                id: 2,
                title: t("production.item_1.tabs.i2.title"),
                tab_img: p_1_2,
                p: t("production.item_1.tabs.i2.p")
            },
            i3: {
                id: 3,
                title: t("production.item_1.tabs.i3.title"),
                tab_img: p_1_3,
                p: t("production.item_1.tabs.i3.p")
            },
            i4: {
                id: 4,
                title: t("production.item_1.tabs.i4.title"),
                tab_img: p_1_4,
                p: t("production.item_1.tabs.i4.p")

            }
        }
    },
    {
        id: 2,
        title_name: t("production.item_2.title_name"),
        top_right: {
            top_img: p_2_top,
            top_img_style: {
                background: `url(${p_2_top}) bottom no-repeat`,
                backgroundSize: "contain",
            },
            subtitle: "FANDI TEKS",
            title: t("production.item_2.top_right.title"),
            p: t("production.item_2.top_right.p"),
            list_title: t("production.item_2.top_right.list_title"),
            list: {
                i1: t("production.item_2.top_right.list.i1"),
                i2: t("production.item_2.top_right.list.i2"),
                i3: t("production.item_2.top_right.list.i3")
            }
        },
        top_bottom: {
            i1: {
                icon: icon1,
                title: t("production.item_2.top_bottom.i1.title"),
                subtitle: t("production.item_2.top_bottom.i1.subtitle"),
                p: t("production.item_2.top_bottom.i1.p")
            },
            i2: {
                icon: icon2,
                title: t("production.item_2.top_bottom.i2.title"),
                subtitle: t("production.item_2.top_bottom.i2.subtitle"),
                p: t("production.item_2.top_bottom.i2.p")
            },
            i3: {
                icon: icon3,
                title: t("production.item_2.top_bottom.i3.title"),
                subtitle: t("production.item_2.top_bottom.i3.subtitle"),
                p: t("production.item_2.top_bottom.i3.p")
            }
        },
        tabs: {
            i1: {
                id: 1,
                title: t("production.item_2.tabs.i1.title"),
                tab_img: p_2_1,
                p: t("production.item_2.tabs.i1.p")
            },
            i2: {
                id: 2,
                title: t("production.item_2.tabs.i2.title"),
                tab_img: p_2_2,
                p: t("production.item_2.tabs.i2.p")
            },
            i3: {
                id: 3,
                title: t("production.item_2.tabs.i3.title"),
                tab_img: p_2_3,
                p: t("production.item_2.tabs.i3.p")
            },
            i4: {
                id: 4,
                title: t("production.item_2.tabs.i4.title"),
                tab_img: p_2_4,
                p: t("production.item_2.tabs.i4.p")
            },
        }
    },
    {
        id: 3,
        title_name: t("production.item_3.title_name"),
        top_right: {
            top_img: p_3_top,
            top_img_style: {background: `url(${p_3_top}) bottom no-repeat`, backgroundSize: "contain"},
            subtitle: "FANDI TEKS",
            title: t("production.item_3.top_right.title"),
            p: t("production.item_3.top_right.p"),
            list_title: t("production.item_3.top_right.list_title"),
            list:  {
                i1: t("production.item_3.top_right.list.i1"),
                i2: t("production.item_3.top_right.list.i2"),
                i3: t("production.item_3.top_right.list.i3")
            }
        },
        top_bottom: {
            i1: {
                icon: icon1,
                title: t("production.item_3.top_bottom.i1.title"),
                subtitle: t("production.item_3.top_bottom.i1.subtitle"),
                p: t("production.item_3.top_bottom.i1.p")
            },
            i2: {
                icon: icon2,
                title: t("production.item_3.top_bottom.i2.title"),
                subtitle: t("production.item_3.top_bottom.i2.subtitle"),
                p: t("production.item_3.top_bottom.i2.p")
            },
            i3: {
                icon: icon3,
                title: t("production.item_3.top_bottom.i3.title"),
                subtitle: t("production.item_3.top_bottom.i3.subtitle"),
                p: t("production.item_3.top_bottom.i3.p")
            },
        },
        tabs: {
            i1: {
                id: 1,
                title: t("production.item_3.tabs.i1.title"),
                tab_img: p_3_1,
                p: t("production.item_3.tabs.i1.p")
            },
            i2: {
                id: 2,
                title: t("production.item_3.tabs.i2.title"),
                tab_img: p_3_2,
                p: t("production.item_3.tabs.i2.p")
            },
            i3: {
                id: 3,
                title: t("production.item_3.tabs.i3.title"),
                tab_img: p_3_3,
                p: t("production.item_3.tabs.i3.p")
            },
            i4: {
                id: 4,
                title: t("production.item_3.tabs.i4.title"),
                tab_img: p_3_4,
                p: t("production.item_3.tabs.i4.p")
            },
        }
    },
    {
        id: 4,
        title_name: t("production.item_4.title_name"),
        top_right: {
            top_img: p_4_top,
            top_img_style: {
                background: `url(${p_4_top}) center center no-repeat`,
                backgroundSize: "contain",

            },
            subtitle: "FANDI TEKS",
            title: t("production.item_4.top_right.title"),
            p: t("production.item_4.top_right.p"),
            list_title: t("production.item_4.top_right.list_title"),
            list: {
                i1: t("production.item_4.top_right.list.i1"),
                i2: t("production.item_4.top_right.list.i2"),
                i3: t("production.item_4.top_right.list.i3")
            }
        },
        top_bottom: {
            i1: {
                icon: icon1,
                title: t("production.item_4.top_bottom.i1.title"),
                subtitle: t("production.item_4.top_bottom.i1.subtitle"),
                p: t("production.item_4.top_bottom.i1.p")
            },
            i2: {
                icon: icon2,
                title: t("production.item_4.top_bottom.i2.title"),
                subtitle: t("production.item_4.top_bottom.i2.subtitle"),
                p: t("production.item_4.top_bottom.i2.p")
            },
            i3: {
                icon: icon3,
                title: t("production.item_4.top_bottom.i3.title"),
                subtitle: t("production.item_4.top_bottom.i3.subtitle"),
                p: t("production.item_4.top_bottom.i3.p")
            },
        },
        tabs: {
            i1: {
                id: 1,
                title: t("production.item_4.tabs.i1.title"),
                tab_img: p_4_1,
                p: t("production.item_4.tabs.i1.p")
            },
            i2: {
                id: 2,
                title: t("production.item_4.tabs.i2.title"),
                tab_img: p_4_2,
                p: t("production.item_4.tabs.i2.p")
            },
            i3: {
                id: 3,
                title: t("production.item_4.tabs.i3.title"),
                tab_img: p_4_3,
                p: t("production.item_4.tabs.i3.p")
            },
            i4: {
                id: 4,
                title: t("production.item_4.tabs.i4.title"),
                tab_img: p_4_4,
                p: t("production.item_4.tabs.i4.p")
            },
        }
    },
]
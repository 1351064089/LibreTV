// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置（已整合新添加的全部数据源）
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // --- 普通影视资源分类 ---
    "iqiyizyapi.com": {
        name: "🎬-爱奇艺-",
        api: "https://iqiyizyapi.com/api.php/provide/vod",
        detail: "https://iqiyizyapi.com",
        adult: false
    },
    "dbzy.tv": {
        name: "🎬豆瓣资源",
        api: "https://caiji.dbzy5.com/api.php/provide/vod",
        detail: "https://dbzy.tv",
        _comment: "有伦理片",
        adult: false
    },
    "mtzy.me": {
        name: "🎬茅台资源",
        api: "https://caiji.maotaizy.cc/api.php/provide/vod",
        detail: "https://mtzy.me",
        adult: false
    },
    "wolongzyw.com": {
        name: "🎬卧龙资源",
        api: "https://wolongzyw.com/api.php/provide/vod",
        detail: "https://wolongzyw.com",
        adult: false
    },
    "ikunzy.com": {
        name: "🎬iKun资源",
        api: "https://ikunzyapi.com/api.php/provide/vod",
        detail: "https://ikunzy.com",
        adult: false
    },
    "dyttzyapi.com": {
        name: "🎬电影天堂",
        api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
        detail: "http://caiji.dyttzyapi.com",
        adult: false
    },
    "www.maoyanzy.com": {
        name: "🎬猫眼资源",
        api: "https://api.maoyanapi.top/api.php/provide/vod",
        detail: "https://www.maoyanzy.com",
        adult: false
    },
    "cj.lzcaiji.com": {
        name: "🎬量子资源",
        api: "https://cj.lzcaiji.com/api.php/provide/vod",
        detail: "https://cj.lzcaiji.com",
        adult: false
    },
    "360zy.com": {
        name: "🎬360 资源",
        api: "https://360zyzz.com/api.php/provide/vod",
        detail: "https://360zy.com",
        adult: false
    },
    "jszyapi.com": {
        name: "🎬极速资源",
        api: "https://jszyapi.com/api.php/provide/vod",
        detail: "https://jszyapi.com",
        adult: false
    },
    "www.moduzy.net": {
        name: "🎬魔都资源",
        api: "https://www.mdzyapi.com/api.php/provide/vod",
        detail: "https://www.moduzy.net",
        adult: false
    },
    "ffzyapi.com": {
        name: "🎬非凡资源",
        api: "https://api.ffzyapi.com/api.php/provide/vod",
        detail: "https://cj.ffzyapi.com",
        adult: false
    },
    "bfzy.tv": {
        name: "🎬暴风资源",
        api: "https://bfzyapi.com/api.php/provide/vod",
        detail: "https://bfzy.tv",
        adult: false
    },
    "zuida.xyz": {
        name: "🎬最大资源",
        api: "https://api.zuidapi.com/api.php/provide/vod",
        detail: "https://zuida.xyz",
        adult: false
    },
    "wujinzy.me": {
        name: "🎬无尽资源",
        api: "https://api.wujinapi.me/api.php/provide/vod",
        detail: "https://wujinzy.com",
        adult: false
    },
    "xinlangapi.com": {
        name: "🎬新浪资源",
        api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
        detail: "https://xinlangapi.com",
        adult: false
    },
    "api.wwzy.tv": {
        name: "🎬旺旺资源",
        api: "https://api.wwzy.tv/api.php/provide/vod",
        detail: "https://api.wwzy.tv",
        adult: false
    },
    "www.subozy.com": {
        name: "🎬速播资源",
        api: "https://subocaiji.com/api.php/provide/vod",
        detail: "https://www.subozy.com",
        adult: false
    },
    "jinyingzy.com": {
        name: "🎬金鹰点播",
        api: "https://jinyingzy.com/api.php/provide/vod",
        detail: "https://jinyingzy.com",
        adult: false
    },
    "p2100.net": {
        name: "🎬飘零资源",
        api: "https://p2100.net/api.php/provide/vod",
        detail: "https://p2100.net",
        adult: false
    },
    "api.ukuapi88.com": {
        name: "🎬U酷影视",
        api: "https://api.ukuapi88.com/api.php/provide/vod",
        detail: "https://www.ukuzy.com",
        adult: false
    },
    "api.guangsuapi.com": {
        name: "🎬光速资源",
        api: "https://api.guangsuapi.com/api.php/provide/vod",
        detail: "https://api.guangsuapi.com",
        adult: false
    },
    "www.hongniuzy.com": {
        name: "🎬红牛资源",
        api: "https://www.hongniuzy2.com/api.php/provide/vod",
        detail: "https://www.hongniuzy.com",
        adult: false
    },
    "caiji.moduapi.cc": {
        name: "🎬魔都动漫",
        api: "https://caiji.moduapi.cc/api.php/provide/vod",
        detail: "https://caiji.moduapi.cc",
        adult: false
    },
    "www.ryzyw.com": {
        name: "🎬如意资源",
        api: "https://pz.v88.qzz.io/?url=https://cj.rycjapi.com/api.php/provide/vod",
        detail: "https://www.ryzyw.com",
        adult: false
    },
    "www.haohuazy.com": {
        name: "🎬豪华资源",
        api: "https://pz.v88.qzz.io/?url=https://hhzyapi.com/api.php/provide/vod",
        detail: "https://www.haohuazy.com",
        adult: false
    },
    "bdzy1.com": {
        name: "🎬百度云zy",
        api: "https://pz.v88.qzz.io/?url=https://api.apibdzy.com/api.php/provide/vod",
        detail: "https://bdzy1.com",
        adult: false
    },
    "lovedan.net": {
        name: "🎬艾旦影视",
        api: "https://pz.v88.qzz.io/?url=https://lovedan.net/api.php/provide/vod",
        detail: "https://lovedan.net",
        adult: false
    },
    "lzizy.net": {
        name: "🎬量子影视",
        api: "https://cj.lziapi.com/api.php/provide/vod",
        detail: "https://lzizy.net",
        _comment: "备用",
        adult: false
    },
    "zuidazy.co": {
        name: "🎬最大点播",
        api: "https://zuidazy.me/api.php/provide/vod",
        detail: "https://zuidazy.co",
        _comment: "备用",
        adult: false
    },
    "wujinzy.com": {
        name: "🎬无尽影视",
        api: "https://api.wujinapi.com/api.php/provide/vod",
        detail: "https://wujinzy.com",
        _comment: "备用",
        adult: false
    },
    "wwzy.tv": {
        name: "🎬旺旺短剧",
        api: "https://wwzy.tv/api.php/provide/vod",
        detail: "https://wwzy.tv",
        _comment: "备用",
        adult: false
    },
    "1080zyk4.com": {
        name: "🎬优质资源",
        api: "https://api.yzzy-api.com/inc/apijson.php",
        detail: "https://1080zyk4.com",
        _comment: "无法搜索",
        adult: false
    },
    "www.huyaapi.com": {
        name: "🎬虎牙资源",
        api: "https://www.huyaapi.com/api.php/provide/vod",
        detail: "https://www.huyaapi.com",
        _comment: "污染搜索结果",
        adult: false
    },
    "yayazy3.com": {
        name: "🎬鸭鸭资源",
        api: "https://cj.yayazy.net/api.php/provide/vod",
        detail: "https://yayazy3.com",
        _comment: "暂不支持搜索",
        adult: false
    },
    "suonizy.net": {
        name: "🎬索尼资源",
        api: "https://suoniapi.com/api.php/provide/vod",
        detail: "https://suonizy.net",
        _comment: "暂不支持搜索",
        adult: false
    },
    "kuaichezy.com": {
        name: "🎬快车资源",
        api: "https://caiji.kuaichezy.org/api.php/provide/vod",
        detail: "https://kuaichezy.com",
        _comment: "暂不支持搜索",
        adult: false
    },
    "shandianzy.com": {
        name: "🎬闪电资源",
        api: "https://xsd.sdzyapi.com/api.php/provide/vod",
        detail: "https://shandianzy.com",
        _comment: "暂不支持搜索",
        adult: false
    },
    "yhzy.cc": {
        name: "🎬樱花资源",
        api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
        detail: "https://yhzy.cc",
        _comment: " 403 Forbidden ",
        adult: false
    },
    // --- 成人(18+) 资源分类 ---
    "91md.me": {
        name: "🔞麻豆视频",
        api: "https://91md.me/api.php/provide/vod",
        detail: "https://91md.me",
        adult: true
    },
    "lbapiby.com": {
        name: "🔞--AIvin-",
        api: "http://lbapiby.com/api.php/provide/vod",
        detail: "http://lbapiby.com",
        adult: true
    },
    "155zy2.com": {
        name: "🔞155-资源",
        api: "https://155api.com/api.php/provide/vod",
        detail: "https://155zy2.com",
        adult: true
    },
    "apiyutu.com": {
        name: "🔞玉兔资源",
        api: "https://apiyutu.com/api.php/provide/vod",
        detail: "https://apiyutu.com",
        adult: true
    },
    "fhapi9.com": {
        name: "🔞番号资源",
        api: "http://fhapi9.com/api.php/provide/vod",
        detail: "http://fhapi9.com",
        adult: true
    },
    "apilsbzy1.com": {
        name: "🔞-老色逼-",
        api: "https://apilsbzy1.com/api.php/provide/vod",
        detail: "https://apilsbzy1.com",
        adult: true
    },
    "www.yytv4.cc": {
        name: "🔞优优资源",
        api: "https://www.yytv4.cc/api.php/provide/vod",
        detail: "https://www.yytv4.cc",
        adult: true
    },
    "xiaojizy.live": {
        name: "🔞小鸡资源",
        api: "https://api.xiaojizy.live/provide/vod",
        detail: "https://xiaojizy.live",
        adult: true
    },
    "hsckzy.xyz": {
        name: "🔞黄色仓库",
        api: "https://hsckzy.xyz/api.php/provide/vod",
        detail: "https://hsckzy.xyz",
        adult: true
    },
    "apidanaizi.com": {
        name: "🔞-大奶子-",
        api: "https://apidanaizi.com/api.php/provide/vod",
        detail: "https://apidanaizi.com",
        adult: true
    },
    "jkunzyapi.com": {
        name: "🔞jkun资源",
        api: "https://jkunzyapi.com/api.php/provide/vod",
        detail: "https://jkunzyapi.com",
        adult: true
    },
    "lbapi9.com": {
        name: "🔞乐播资源",
        api: "https://lbapi9.com/api.php/provide/vod",
        detail: "https://lbapi9.com",
        adult: true
    },
    "Naixxzy.com": {
        name: "🔞奶香资源",
        api: "https://Naixxzy.com/api.php/provide/vod",
        detail: "https://Naixxzy.com",
        adult: true
    },
    "slapibf.com": {
        name: "🔞森林资源",
        api: "https://beiyong.slapibf.com/api.php/provide/vod",
        detail: "https://slapibf.com",
        adult: true
    },
    "apilj.com": {
        name: "🔞辣椒资源",
        api: "https://pz.v88.qzz.io/?url=https://apilj.com/api.php/provide/vod",
        detail: "https://apilj.com",
        adult: true
    },
    "shayuapi.com": {
        name: "🔞鲨鱼资源",
        api: "https://shayuapi.com/api.php/provide/vod",
        detail: "https://shayuapi.com",
        adult: true
    },
    "doudouzy.com": {
        name: "🔞豆豆资源",
        api: "https://api.douapi.cc/api.php/provide/vod",
        detail: "https://doudouzy.com",
        _comment: " 不稳定 ",
        adult: true
    },
    "didizy.com": {
        name: "🔞滴滴资源",
        api: "https://api.ddapi.cc/api.php/provide/vod",
        detail: "https://didizy.com",
        adult: true
    },
    "heiliaozy.cc": {
        name: "🔞黑料资源",
        api: "https://www.heiliaozyapi.com/api.php/provide/vod",
        detail: "https://heiliaozy.cc",
        adult: true
    },
    "api.bwzym3u8.com": {
        name: "🔞百万资源",
        api: "https://api.bwzyz.com/api.php/provide/vod",
        detail: "https://api.bwzym3u8.com",
        adult: true
    },
    "thzy8.me": {
        name: "🔞桃花资源",
        api: "https://thzy1.me/api.php/provide/vod",
        detail: "https://thzy8.me",
        adult: true
    },
    "www.jingpinx.com": {
        name: "🔞精品资源",
        api: "https://www.jingpinx.com/api.php/provide/vod",
        detail: "https://www.jingpinx.com",
        adult: true
    },
    "ckzy.me": {
        name: "🔞 CK-资源",
        api: "https://ckzy.me/api.php/provide/vod",
        detail: "https://ckzy.me",
        _comment: "无搜索结果",
        adult: true
    },
    "souavzyw.com": {
        name: "🔞souavZY",
        api: "https://api.souavzyw.net/api.php/provide/vod",
        detail: "https://api.souavzyw.net",
        adult: true
    },
    "www.xxibaozyw.com": {
        name: "🔞细胞资源",
        api: "https://www.xxibaozyw.com/api.php/provide/vod",
        detail: "https://www.xxibaozyw.com",
        _comment: "无搜索结果",
        adult: true
    },
    "xiangjiaozyw.com": {
        name: "🔞香蕉资源",
        api: "https://www.xiangjiaozyw.com/api.php/provide/vod",
        detail: "https://www.xiangjiaozyw.com",
        _comment: "无搜索结果",
        adult: true
    },
    "www.msnii.com": {
        name: "🔞-美少女-",
        api: "https://www.msnii.com/api/json.php",
        detail: "https://www.msnii.com",
        _comment: "无法搜索",
        adult: true
    },
    "www.pgxdy.com": {
        name: "🔞-黄AVZY",
        api: "https://www.pgxdy.com/api/json.php",
        detail: "https://www.pgxdy.com",
        _comment: "无法搜索",
        adult: true
    },
    "www.kxgav.com": {
        name: "🔞白嫖资源",
        api: "https://www.kxgav.com/api/json.php",
        detail: "https://www.kxgav.com",
        _comment: "无法搜索",
        adult: true
    },
    "xingba111.com": {
        name: "🔞杏吧资源",
        api: "https://xingba222.com/api.php/provide/vod",
        detail: "https://xingba111.com",
        _comment: "403 Forbidden",
        adult: true
    },
    "dadizy11.com": {
        name: "🔞大地资源",
        api: "https://dadiapi.com/feifei",
        detail: "https://dadizy11.com",
        _comment: "污染搜索结果",
        adult: true
    },
    "semaozy1.com": {
        name: "🔞色猫资源",
        api: "https://caiji.semaozy.net/inc/apijson_vod.php/provide/vod",
        detail: "https://semaozy1.com",
        _comment: "无法搜索",
        adult: true
    },
    "aosikazy.com": {
        name: "🔞-奥斯卡-",
        api: "https://aosikazy.com/api.php/provide/vod",
        detail: "https://aosikazy.com",
        _comment: "禁止搜索结果",
        adult: true
    },
    "siwazyw.tv": {
        name: "🔞丝袜资源",
        api: "https://siwazyw.tv/api.php/provide/vod",
        detail: "https://siwazyw.tv",
        _comment: "污染搜索结果",
        adult: true
    }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
// 提示：如果你需要隐藏带有 🔞 标记的站点，可以将此项改为 true
const HIDE_BUILTIN_ADULT_APIS = false;

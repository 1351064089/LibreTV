// ===================== 基础全局常量 =====================
const PROXY_URL = '/proxy/';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;
const CUSTOM_PLAYER_URL = 'player.html';
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// ===================== 站点基础信息配置 =====================
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// ===================== 密码验证配置 =====================
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',
    verificationTTL: 90 * 24 * 60 * 60 * 1000 // 90天有效期
};

// ===================== 内置数据源容器 =====================
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
};

// 外部扩展影视源集合（2025稳定可用）
const LATEST_API_SITES_2025 = {
    fantaiying: {
        api: 'http://www.饭太硬.com/tv',
        name: '饭太硬（2025最稳定单仓，加载/搜索/播放极快）',
        detail: 'http://www.饭太硬.com'
    },
    fantaiying_bei: {
        api: 'http://fty.888484.xyz/tv',
        name: '饭太硬备用（速度同样快）',
        detail: ''
    },
    feimao: {
        api: 'http://肥猫.com/',
        name: '肥猫（资源最全，2025热门单仓，速度快）',
        detail: 'http://肥猫.com'
    },
    feimao_bei: {
        api: 'https://like.肥猫.com/PandaQ',
        name: '肥猫备用',
        detail: ''
    },
    moyuer: {
        api: 'http://我不是.摸鱼儿.top',
        name: '摸鱼儿（4K专线，超清高速）',
        detail: ''
    },
    duhe: {
        api: 'https://毒盒.com/tv',
        name: '毒盒单仓（稳定高速）',
        detail: ''
    },
    duhe_duo: {
        api: 'https://tv.youdu.fan:666/',
        name: '毒盒多仓（多线路自动选快，强烈推荐）',
        detail: ''
    },
    ouge_bei: {
        api: 'http://m.nxog.top/nxog/ou1.php?url=http://tv.nxog.top',
        name: '欧歌备用多仓（多源聚合，资源丰富）',
        detail: ''
    },
    qixing: {
        api: 'https://qixing.myhkw.com/QX/api.json',
        name: '七星多仓（2025推荐）',
        detail: ''
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源（经典稳定，2025仍高速可用）',
        detail: 'https://jszyapi.com'
    },
    ffzy: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡资源（经典稳定，2025可用）',
        detail: ''
    },
    jyzy: {
        api: 'https://jyzyapi.com/api.php/provide/vod',
        name: '金鹰资源（经典稳定）',
        detail: 'https://jyzyapi.com'
    },
    sdzy: {
        api: 'https://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源（经典稳定）',
        detail: 'https://sdzyapi.com'
    }
};

// 合并扩展源至主数据源列表
extendAPISites(LATEST_API_SITES_2025);

// ===================== API请求统一配置（搜索/详情接口） =====================
const API_CONFIG = {
    search: {
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// ===================== 聚合搜索功能配置 =====================
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 10000,
    parallelRequests: true,
    showSourceBadges: true
};

// ===================== 播放器全局配置 =====================
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,
    filterAds: true,
    autoPlayNext: true,
    adFilteringEnabled: true,
    adFilteringStorage: 'adFilteringEnabled'
};

// ===================== 错误提示文案 =====================
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// ===================== 安全防护配置 =====================
const SECURITY_CONFIG = {
    enableXSSProtection: true,
    sanitizeUrls: true,
    maxQueryLength: 100
};

// ===================== 自定义采集源配置 =====================
const CUSTOM_API_CONFIG = {
    separator: ',',
    maxSources: 5,
    testTimeout: 5000,
    namePrefix: 'Custom-',
    validateUrl: true,
    cacheResults: true,
    cacheExpiry: 5184000000,
    adultPropName: 'isAdult'
};

// 是否隐藏内置成人采集源
const HIDE_BUILTIN_ADULT_APIS = false;

// ===================== 挂载全局变量给前端页面调用 =====================
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;
window.API_CONFIG = API_CONFIG;

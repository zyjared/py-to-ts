## 依赖

- [big-integer](https://www.npmjs.com/package/big-integer)

```sh
# npm
npm install big-integer

# yarn
yarn add big-integer

# pnpm
pnpm install big-integer

# bun
bun install big-integer
```

## 使用

- 默认带类型提示
- 方法名和 py 版本保持一致
- 一部分方法参数类型和 py 版本有区别
  - 可以查看 `.d.ts` 文件
  - 区别在于如果是整数，可能需要使用 `bigInt()` 得到 `BigInteger` 类型

```mjs
import { ABogus } from '文件位置'

const bogus = new ABogus()

const USERAGENT: string = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
const url_str: string = 'https://www.douyin.com/aweme/v1/web/aweme/detail/?device_platform=webapp&aid=6383&channel=channel_pc_web&pc_client_type=1&version_code=190500&version_name=19.5.0&cookie_enabled=true&browser_language=zh-CN&browser_platform=Win32&browser_name=Firefox&browser_online=true&engine_name=Gecko&os_name=Windows&os_version=10&platform=PC&screen_width=1920&screen_height=1080&browser_version=124.0&engine_version=122.0.0.0&cpu_core_num=12&device_memory=8&aweme_id=7345492945006595379'

// 将url参数转换为字典
const url_params: Record<string, string> = Object.fromEntries(url_str.split('?')[1].split('&').map(param => param.split('=')))

console.log(`URL参数: ${JSON.stringify(url_params)}`)
const _a_bogus = bogus.get_value(url_params, USERAGENT, 1, 1, 1, 1, 1)

// 使用url编码a_bogus
const a_bogus = encodeURIComponent(_a_bogus)
console.log(a_bogus)
console.log(USERAGENT)
```

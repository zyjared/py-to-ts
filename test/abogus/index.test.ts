import { describe, expect, it } from 'vitest'
import { ABogus } from '../../src/abogus'
import result from './data.json'

describe('abogus', () => {
  const bogus = new ABogus()
  const USERAGENT: string = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
  const url_str: string = 'https://www.douyin.com/aweme/v1/web/aweme/detail/?device_platform=webapp&aid=6383&channel=channel_pc_web&pc_client_type=1&version_code=190500&version_name=19.5.0&cookie_enabled=true&browser_language=zh-CN&browser_platform=Win32&browser_name=Firefox&browser_online=true&engine_name=Gecko&os_name=Windows&os_version=10&platform=PC&screen_width=1920&screen_height=1080&browser_version=124.0&engine_version=122.0.0.0&cpu_core_num=12&device_memory=8&aweme_id=7345492945006595379'
  // 将url参数转换为字典
  const url_params: Record<string, string> = Object.fromEntries(url_str.split('?')[1].split('&').map(param => param.split('=')))

  it('new URLSearchParams', () => {
    expect(new URLSearchParams(url_params).toString()).toMatchObject(result.urlencode)
  })

  it('params', () => {
    expect(url_params).toMatchObject(result.params)
  })

  it('uri', () => {
    const _a_bogus = bogus.get_value(url_params, USERAGENT, 1, 1, 1, 1, 1)
    const a_bogus = encodeURIComponent(_a_bogus)
    expect(a_bogus).toEqual(result.uri)
  })
})

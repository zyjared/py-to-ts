/**
 * Original Author:
 * This file is from https://github.com/JoeanAmier/TikTokDownloader
 * And is licensed under the GNU General Public License v3.0
 * If you use this code, please keep this license and the original author information.
 *
 * Modified by:
 * And this file is now a part of the https://github.com/Evil0ctal/Douyin_TikTok_Download_API open-source project.
 * This project is licensed under the Apache License 2.0, and the original author information is kept.
 *
 * Purpose:
 * This file is used to generate the `a_bogus` parameter for the Douyin Web API.
 *
 * Changes Made:
 * 1. Changed the ua_code to compatible with the current config file User-Agent string in https://github.com/Evil0ctal/Douyin_TikTok_Download_API/blob/main/crawlers/douyin/web/config.yaml
 * 2. Converted Python code to TypeScript.
 */

import type { BigInteger } from 'big-integer'
import bigInt from 'big-integer'

export class ABogus {
  private static __filter = /%([0-9A-F]{2})/
  private static __arguments = [0, 1, 14]
  private static __end_string = 'cus'
  private static __version = [1, 0, 1, 5]
  private static __env = [
    49,
    53,
    51,
    54,
    124,
    55,
    52,
    50,
    124,
    49,
    53,
    51,
    54,
    124,
    56,
    54,
    52,
    124,
    48,
    124,
    48,
    124,
    48,
    124,
    48,
    124,
    49,
    53,
    51,
    54,
    124,
    56,
    54,
    52,
    124,
    49,
    53,
    51,
    54,
    124,
    56,
    54,
    52,
    124,
    49,
    53,
    51,
    54,
    124,
    55,
    52,
    50,
    124,
    50,
    52,
    124,
    50,
    52,
    124,
    87,
    105,
    110,
    51,
    50,
  ]

  private static __reg = [
    1937774191,
    1226093241,
    388252375,
    3666478592,
    2842636476,
    372324522,
    3817729613,
    2969243214,
  ].map(el => bigInt(el))

  private static __str = {
    s0: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    s1: 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=',
    s2: 'Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=',
    s3: 'ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe',
    s4: 'Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe',
  }

  private chunk: number[]
  private size: number
  private reg: BigInteger[]

  constructor() {
    this.chunk = []
    this.size = 0
    this.reg = ABogus.__reg.slice()
  }

  static list_1(random_num: number | null = null, a = 170, b = 85, c = 45) {
    return ABogus.random_list(random_num, a, b, 1, 2, 5, c & a)
  }

  static list_2(random_num: number | null = null, a = 170, b = 85) {
    return ABogus.random_list(random_num, a, b, 1, 0, 0, 0)
  }

  static list_3(random_num: number | null = null, a = 170, b = 85) {
    return ABogus.random_list(random_num, a, b, 1, 0, 5, 0)
  }

  static random_list(a: number | null = null, b = 170, c = 85, d = 0, e = 0, f = 0, g = 0) {
    const r = a !== null ? a : (Math.random() * 10000)

    const v = [
      r,
      Math.floor(r) & 255,
      Math.floor(r) >> 8,
    ]
    let s = v[1] & b | d
    v.push(s)
    s = v[1] & c | e
    v.push(s)
    s = v[2] & b | f
    v.push(s)
    s = v[2] & c | g
    v.push(s)
    return v.slice(-4)
  }

  static from_char_code(...args: number[]) {
    return args.map(code => String.fromCharCode(code)).join('')
  }

  static generate_string_1(
    random_num_1: number | null = null,
    random_num_2: number | null = null,
    random_num_3: number | null = null,
  ) {
    return ABogus.from_char_code(...ABogus.list_1(random_num_1))
      + ABogus.from_char_code(...ABogus.list_2(random_num_2))
      + ABogus.from_char_code(...ABogus.list_3(random_num_3))
  }

  generate_string_2(
    url_params: string,
    user_agent: string,
    start_time = 0,
    end_time = 0,
  ) {
    const a = this.generate_string_2_list(url_params, user_agent, start_time, end_time)
    const e = ABogus.end_check_num(a)
    a.push(...ABogus.__env)
    a.push(e)
    return ABogus.rc4_encrypt(ABogus.from_char_code(...a), 'y')
  }

  generate_string_2_list(
    url_params: string,
    user_agent: string,
    start_time: number = 0,
    end_time: number = 0,
  ) {
    start_time = start_time || Date.now()
    end_time = end_time || (start_time + Math.floor(Math.random() * 5) + 4)

    const params_array = this.sum(this.sum(url_params))

    // TODO: 需要编写一个函数来生成ua_code 2024年6月13日17:13:08
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36
    const ua_code = [76, 98, 15, 131, 97, 245, 224, 133, 122, 199, 241, 166, 79, 34, 90, 191, 128, 126, 122, 98, 66, 11, 14, 40, 49, 110, 110, 173, 67, 96, 138, 252].map(el => bigInt(el))
    return ABogus.list_4(
      (end_time >> 24) & 255,
      params_array[21],
      ua_code[23],
      (end_time >> 16) & 255,
      params_array[22],
      ua_code[24],
      (end_time >> 8) & 255,
      (end_time >> 0) & 255,
      (start_time >> 24) & 255,
      (start_time >> 16) & 255,
      (start_time >> 8) & 255,
      (start_time >> 0) & 255,
    )
  }

  static reg_to_array(a: BigInteger[]) {
    const o = Array.from({ length: 32 }).fill(bigInt.zero) as BigInteger[]
    for (let i = 0; i < 8; i++) {
      let c = a[i]
      o[4 * i + 3] = bigInt(255).and(c)
      c = c.shiftRight(bigInt(8))
      o[4 * i + 2] = bigInt(255).and(c)
      c = c.shiftRight(bigInt(8))
      o[4 * i + 1] = bigInt(255).and(c)
      c = c.shiftRight(bigInt(8))
      o[4 * i] = bigInt(255).and(c)
    }

    return o
  }

  compress(a: number[]) {
    const f = ABogus.generate_f(a.map(el => bigInt(el)))
    const i = this.reg.slice()
    for (let _o = 0; _o < 64; _o++) {
      const o = bigInt(_o)
      let c = ABogus.de(i[0], bigInt(12)).add(i[4]).add(ABogus.de(ABogus.pe(o), o))

      c = c.and(bigInt('0xFFFFFFFF'))
      c = ABogus.de(c, bigInt(7))

      const s = (c.xor(ABogus.de(i[0], bigInt(12)))).and(bigInt('0xFFFFFFFF'))

      let u = ABogus.he(o, i[0], i[1], i[2])
      u = u.add(i[3]).add(s).add(f[_o + 68]).and(bigInt('0xFFFFFFFF'))

      let b = ABogus.ve(o, i[4], i[5], i[6])
      b = (b.add(i[7]).add(c).add(f[_o])).and(bigInt('0xFFFFFFFF'))

      i[3] = i[2]
      i[2] = ABogus.de(i[1], bigInt(9))
      i[1] = i[0]
      i[0] = u

      i[7] = i[6]
      i[6] = ABogus.de(i[5], bigInt(19))
      i[5] = i[4]
      i[4] = bigInt(b).xor(ABogus.de(b, bigInt(9))).xor(ABogus.de(b, bigInt(17))).and(bigInt('0xFFFFFFFF'))
    }

    for (let l = 0; l < 8; l++) {
      this.reg[l] = (this.reg[l].xor(i[l])).and(bigInt('0xFFFFFFFF'))
    }
  }

  static generate_f(e: BigInteger[]) {
    const r = Array.from({ length: 132 }).fill(bigInt.zero) as BigInteger[]

    for (let t = 0; t < 16; t++) {
      r[t] = (e[4 * t].shiftLeft(bigInt(24))).or(e[4 * t + 1].shiftLeft(bigInt(16))).or(e[4 * t + 2].shiftLeft(8)).or(e[4 * t + 3])
      r[t] = r[t].and(bigInt('0xFFFFFFFF'))
    }

    for (let n = 16; n < 68; n++) {
      let a = r[n - 16].xor(r[n - 9]).xor(this.de(r[n - 3], bigInt(15)))
      a = a.xor(this.de(a, bigInt(15))).xor(this.de(a, bigInt(23)))
      r[n] = (a.xor(this.de(r[n - 13], bigInt(7))).xor(r[n - 6])).and(bigInt('0xFFFFFFFF'))
    }

    for (let n = 68; n < 132; n++) {
      r[n] = (r[n - 68].xor(r[n - 64])).and(bigInt('0xFFFFFFFF'))
    }

    return r
  }

  static pad_array(arr: number[], length = 60) {
    while (arr.length < length) {
      arr.push(0)
    }
    return arr
  }

  fill(length = 60) {
    const size = 8 * this.size
    this.chunk.push(128)
    this.chunk = ABogus.pad_array(this.chunk, length)
    for (let i = 0; i < 4; i++) {
      this.chunk.push((size >> (8 * (3 - i))) & 255)
    }
  }

  static list_4(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number,
    i: number,
    j: number,
    k: number,
    m: number,
  ) {
    return [
      44,
      a,
      0,
      0,
      0,
      0,
      24,
      b,
      58,
      0,
      c,
      d,
      0,
      24,
      97,
      1,
      0,
      239,
      e,
      51,
      f,
      g,
      0,
      0,
      0,
      0,
      h,
      0,
      0,
      14,
      i,
      j,
      0,
      k,
      m,
      3,
      399,
      1,
      399,
      1,
      64,
      0,
      0,
      0,
    ]
  }

  static end_check_num(a: BigInteger[]) {
    let r = bigInt.zero
    for (const i of a) {
      r = r.xor(i)
    }
    return r
  }

  static decode_string(url_string: string) {
    return url_string.replace(ABogus.__filter, ABogus.replace_func)
  }

  static replace_func(_match: string, p1: string) {
    return String.fromCharCode(Number.parseInt(p1, 16))
  }

  static de(e: BigInteger, r: BigInteger) {
    r = r.mod(bigInt(32))
    return e.shiftLeft(bigInt(r)).and(bigInt('0xFFFFFFFF')).xor(e.shiftRight(bigInt(32).subtract(r)))
  }

  static pe(e: BigInteger) {
    return (e.greaterOrEquals(bigInt.zero) && e.lesser(bigInt(16))) ? bigInt('2043430169') : bigInt('2055708042')
  }

  static he(e: BigInteger, r: BigInteger, t: BigInteger, n: BigInteger) {
    if (e.geq(0) && e.lt(16))
      return r.xor(t).xor(n).and(bigInt('0xFFFFFFFF'))
    else if (e.geq(16) && e.lt(64))
      return (r.and(t)).or(r.and(n)).or(t.and(n)).and(bigInt('0xFFFFFFFF'))
    else
      throw new Error('Invalid value for e')
  }

  static ve(e: BigInteger, r: BigInteger, t: BigInteger, n: BigInteger) {
    if (e.geq(0) && e.lt(16))
      return r.xor(t).xor(n).and(bigInt('0xFFFFFFFF'))
    else if (e.geq(16) && e.lt(64))
      return (r.and(t)).or(r.not().and(n)).and(bigInt('0xFFFFFFFF'))
    else
      throw new Error('Invalid value for e')
  }

  /**
   * 将字符串处理为字符对应的 Unicode 数组
   */
  static convert_to_char_code(a: string) {
    const d: number[] = []
    for (let i = 0; i < a.length; i++) {
      d.push(a.charCodeAt(i))
    }
    return d
  }

  static split_array(arr: any[], chunk_size = 64) {
    const result: number[][] = []
    for (let i = 0; i < arr.length; i += chunk_size) {
      result.push(arr.slice(i, i + chunk_size))
    }
    return result
  }

  static char_code_at(s: string) {
    return s.split('').map(char => char.charCodeAt(0))
  }

  write(e: string | any[]) {
    if (typeof e === 'string') {
      e = ABogus.decode_string(e + ABogus.__end_string)
      e = ABogus.char_code_at(e)
    }
    this.size = e.length
    if (e.length <= 64) {
      this.chunk = e
    }
    else {
      const chunks = ABogus.split_array(e, 64)
      for (const chunk of chunks.slice(0, -1)) {
        this.compress(chunk)
      }
      this.chunk = chunks[chunks.length - 1]
    }
  }

  reset() {
    this.chunk = []
    this.size = 0
    this.reg = ABogus.__reg.slice()
  }

  sum(e: string | any[], length = 60) {
    this.reset()
    this.write(e)
    this.fill(length)
    this.compress(this.chunk)
    const a = ABogus.reg_to_array(this.reg)
    this.reset()
    return a.map(el => el.toJSNumber())
  }

  static generate_result_unit(n: number, s: keyof typeof ABogus.__str) {
    let r = ''
    const masks = [16515072, 258048, 4032, 63]
    const shifts = [18, 12, 6, 0]

    for (let i = 0; i < masks.length; i++) {
      r += ABogus.__str[s][(n & masks[i]) >> shifts[i]]
    }

    return r
  }

  static generate_result_end(s: string, e: keyof typeof ABogus.__str = 's4') {
    let r = ''
    const b = s.charCodeAt(120) << 16

    r += ABogus.__str[e][(b & 16515072) >> 18]
    r += ABogus.__str[e][(b & 258048) >> 12]
    r += '=='

    return r
  }

  static generate_result(s: any, n: any, e: keyof typeof ABogus.__str = 's4') {
    let r = ''
    for (let i = 0; i < n; i++) {
      const b = ((s.charCodeAt(i * 3) << 16) | (s.charCodeAt(i * 3 + 1) << 8) | s.charCodeAt(i * 3 + 2))
      r += ABogus.generate_result_unit(b, e)
    }
    return r
  }

  static generate_args_code() {
    const a: number[] = []

    for (let j = 24; j >= 0; j -= 8) {
      a.push(ABogus.__arguments[0] >> j)
    }

    a.push(ABogus.__arguments[1] / 256)
    a.push(ABogus.__arguments[1] % 256)
    a.push(ABogus.__arguments[1] >> 24)
    a.push(ABogus.__arguments[1] >> 16)

    for (let j = 24; j >= 0; j -= 8) {
      a.push(ABogus.__arguments[2] >> j)
    }

    return a.map(i => Math.floor(i) & 255)
  }

  static rc4_encrypt(plaintext: string, key: string) {
    const s = Array.from({ length: 256 }, (_, i) => i)
    let j = 0

    // Key Scheduling Algorithm (KSA)
    for (let i = 0; i < 256; i++) {
      j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
      [s[i], s[j]] = [s[j], s[i]]
    }
    let i = 0
    j = 0
    const cipher: string[] = []

    // Pseudo-Random Generation Algorithm (PRGA)
    for (let k = 0; k < plaintext.length; k++) {
      i = (i + 1) % 256
      j = (j + s[i]) % 256;
      [s[i], s[j]] = [s[j], s[i]]
      const t: number = (s[i] + s[j]) % 256
      cipher.push(String.fromCharCode(s[t] ^ plaintext.charCodeAt(k)))
    }
    return cipher.join('')
  }

  get_value(
    url_params: Record<string, any>,
    user_agent: string,
    start_time = 0,
    end_time = 0,
    random_num_1: number | null = null,
    random_num_2: number | null = null,
    random_num_3: number | null = null,
  ) {
    const str_1 = ABogus.generate_string_1(
      random_num_1,
      random_num_2,
      random_num_3,
    )

    const str_2 = this.generate_string_2(new URLSearchParams(url_params).toString(), user_agent, start_time, end_time)
    const str = str_1 + str_2

    return ABogus.generate_result(str, 40, 's4') + ABogus.generate_result_end(str, 's4')
  }
}

I appreciate your enthusiasm, but let's take it one step at a time. lol

Let's start by optimizing the raw HTML from the original table on Wikipedia. I'm going to paste the original HTML below, and I need you to do the following:

1. Move any in-line styles to a LESS stylesheet named `color-table.less`
2. Give each `<td>` element a unique ID using the ANSI color code number, which is also the contents of each element. Here's an example of the HTML (I'm leaving the stylesheets up to you):

```html
<!-- Original <td> Element -->
<td style="color:#000000;background:#87d7ff;" title="#87d7ff">
	117
</td>
```

```html
<!-- Updated <td> Element -->
<td id="ansi-256_117" title="#87d7ff">
	117
</td>
```

Here's the original HTML:

```html
<table class="collapsible" style="text-align:center;font-size:80%;width:100%;background:#f6f6f6;cursor:default;"
  cellpadding="0" cellspacing="1">
  <tbody>
    <tr>
      <th colspan="36">256-color mode — foreground: ESC[38;5;#m &nbsp; background: ESC[48;5;#m
      </th>
    </tr>
    <tr>
      <td colspan="18">Standard colors
      </td>
      <td colspan="18">High-intensity colors
      </td>
    </tr>
    <tr>
      <td colspan="36">
        <table style="width:100%;text-align:center;font-weight:bold;">
          <tbody>
            <tr>
              <td style="color:#ffffff;background:#000000;" title="#000000">
			  	&nbsp;0&nbsp;
              </td>
              <td style="color:#ffffff;background:#800000;" title="#800000">
			  	&nbsp;1&nbsp;
              </td>
              <td style="color:#ffffff;background:#008000;" title="#008000">
			  	&nbsp;2&nbsp;
              </td>
              <td style="color:#ffffff;background:#808000;" title="#808000">
              	&nbsp;3&nbsp;
              </td>
              <td style="color:#ffffff;background:#000080;" title="#000080">
              	&nbsp;4&nbsp;
              </td>
              <td style="color:#ffffff;background:#800080;" title="#800080">
              	&nbsp;5&nbsp;
              </td>
              <td style="color:#ffffff;background:#008080;" title="#008080">
              	&nbsp;6&nbsp;
              </td>
              <td style="color:#ffffff;background:#c0c0c0;" title="#c0c0c0">
              	&nbsp;7&nbsp;
              </td>
              <td style="width:1em;">
              </td>
              <td style="color:#000000;background:#808080;" title="#808080">
              	&nbsp;8&nbsp;
              </td>
              <td style="color:#000000;background:#ff0000;" title="#ff0000">
              	&nbsp;9&nbsp;
              </td>
              <td style="color:#000000;background:#00ff00;" title="#00ff00">
                10
              </td>
              <td style="color:#000000;background:#ffff00;" title="#ffff00">
                11
              </td>
              <td style="color:#000000;background:#0000ff;" title="#0000ff">
                12
              </td>
              <td style="color:#000000;background:#ff00ff;" title="#ff00ff">
                13
              </td>
              <td style="color:#000000;background:#00ffff;" title="#00ffff">
                14
              </td>
              <td style="color:#000000;background:#ffffff;" title="#ffffff">
                15
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td colspan="36">216 colors
      </td>
    </tr>
    <tr>
      <td style="color:#ffffff;background:#000000;" title="#000000">
        16
      </td>
      <td style="color:#ffffff;background:#00005f;" title="#00005f">
        17
      </td>
      <td style="color:#ffffff;background:#000087;" title="#000087">
        18
      </td>
      <td style="color:#ffffff;background:#0000af;" title="#0000af">
        19
      </td>
      <td style="color:#ffffff;background:#0000d7;" title="#0000d7">
        20
      </td>
      <td style="color:#ffffff;background:#0000ff;" title="#0000ff">
        21
      </td>
      <td style="color:#ffffff;background:#005f00;" title="#005f00">
        22
      </td>
      <td style="color:#ffffff;background:#005f5f;" title="#005f5f">
        23
      </td>
      <td style="color:#ffffff;background:#005f87;" title="#005f87">
        24
      </td>
      <td style="color:#ffffff;background:#005faf;" title="#005faf">
        25
      </td>
      <td style="color:#ffffff;background:#005fd7;" title="#005fd7">
        26
      </td>
      <td style="color:#ffffff;background:#005fff;" title="#005fff">
        27
      </td>
      <td style="color:#ffffff;background:#008700;" title="#008700">
        28
      </td>
      <td style="color:#ffffff;background:#00875f;" title="#00875f">
        29
      </td>
      <td style="color:#ffffff;background:#008787;" title="#008787">
        30
      </td>
      <td style="color:#ffffff;background:#0087af;" title="#0087af">
        31
      </td>
      <td style="color:#ffffff;background:#0087d7;" title="#0087d7">
        32
      </td>
      <td style="color:#ffffff;background:#0087ff;" title="#0087ff">
        33
      </td>
      <td style="color:#000000;background:#00af00;" title="#00af00">
        34
      </td>
      <td style="color:#000000;background:#00af5f;" title="#00af5f">
        35
      </td>
      <td style="color:#000000;background:#00af87;" title="#00af87">
        36
      </td>
      <td style="color:#000000;background:#00afaf;" title="#00afaf">
        37
      </td>
      <td style="color:#000000;background:#00afd7;" title="#00afd7">
        38
      </td>
      <td style="color:#000000;background:#00afff;" title="#00afff">
        39
      </td>
      <td style="color:#000000;background:#00d700;" title="#00d700">
        40
      </td>
      <td style="color:#000000;background:#00d75f;" title="#00d75f">
        41
      </td>
      <td style="color:#000000;background:#00d787;" title="#00d787">
        42
      </td>
      <td style="color:#000000;background:#00d7af;" title="#00d7af">
        43
      </td>
      <td style="color:#000000;background:#00d7d7;" title="#00d7d7">
        44
      </td>
      <td style="color:#000000;background:#00d7ff;" title="#00d7ff">
        45
      </td>
      <td style="color:#000000;background:#00ff00;" title="#00ff00">
        46
      </td>
      <td style="color:#000000;background:#00ff5f;" title="#00ff5f">
        47
      </td>
      <td style="color:#000000;background:#00ff87;" title="#00ff87">
        48
      </td>
      <td style="color:#000000;background:#00ffaf;" title="#00ffaf">
        49
      </td>
      <td style="color:#000000;background:#00ffd7;" title="#00ffd7">
        50
      </td>
      <td style="color:#000000;background:#00ffff;" title="#00ffff">
        51
      </td>
    </tr>
    <tr>
      <td style="color:#ffffff;background:#5f0000;" title="#5f0000">
        52
      </td>
      <td style="color:#ffffff;background:#5f005f;" title="#5f005f">
        53
      </td>
      <td style="color:#ffffff;background:#5f0087;" title="#5f0087">
        54
      </td>
      <td style="color:#ffffff;background:#5f00af;" title="#5f00af">
        55
      </td>
      <td style="color:#ffffff;background:#5f00d7;" title="#5f00d7">
        56
      </td>
      <td style="color:#ffffff;background:#5f00ff;" title="#5f00ff">
        57
      </td>
      <td style="color:#ffffff;background:#5f5f00;" title="#5f5f00">
        58
      </td>
      <td style="color:#ffffff;background:#5f5f5f;" title="#5f5f5f">
        59
      </td>
      <td style="color:#ffffff;background:#5f5f87;" title="#5f5f87">
        60
      </td>
      <td style="color:#ffffff;background:#5f5faf;" title="#5f5faf">
        61
      </td>
      <td style="color:#ffffff;background:#5f5fd7;" title="#5f5fd7">
        62
      </td>
      <td style="color:#ffffff;background:#5f5fff;" title="#5f5fff">
        63
      </td>
      <td style="color:#ffffff;background:#5f8700;" title="#5f8700">
        64
      </td>
      <td style="color:#ffffff;background:#5f875f;" title="#5f875f">
        65
      </td>
      <td style="color:#ffffff;background:#5f8787;" title="#5f8787">
        66
      </td>
      <td style="color:#ffffff;background:#5f87af;" title="#5f87af">
        67
      </td>
      <td style="color:#ffffff;background:#5f87d7;" title="#5f87d7">
        68
      </td>
      <td style="color:#ffffff;background:#5f87ff;" title="#5f87ff">
        69
      </td>
      <td style="color:#000000;background:#5faf00;" title="#5faf00">
        70
      </td>
      <td style="color:#000000;background:#5faf5f;" title="#5faf5f">
        71
      </td>
      <td style="color:#000000;background:#5faf87;" title="#5faf87">
        72
      </td>
      <td style="color:#000000;background:#5fafaf;" title="#5fafaf">
        73
      </td>
      <td style="color:#000000;background:#5fafd7;" title="#5fafd7">
        74
      </td>
      <td style="color:#000000;background:#5fafff;" title="#5fafff">
        75
      </td>
      <td style="color:#000000;background:#5fd700;" title="#5fd700">
        76
      </td>
      <td style="color:#000000;background:#5fd75f;" title="#5fd75f">
        77
      </td>
      <td style="color:#000000;background:#5fd787;" title="#5fd787">
        78
      </td>
      <td style="color:#000000;background:#5fd7af;" title="#5fd7af">
        79
      </td>
      <td style="color:#000000;background:#5fd7d7;" title="#5fd7d7">
        80
      </td>
      <td style="color:#000000;background:#5fd7ff;" title="#5fd7ff">
        81
      </td>
      <td style="color:#000000;background:#5fff00;" title="#5fff00">
        82
      </td>
      <td style="color:#000000;background:#5fff5f;" title="#5fff5f">
        83
      </td>
      <td style="color:#000000;background:#5fff87;" title="#5fff87">
        84
      </td>
      <td style="color:#000000;background:#5fffaf;" title="#5fffaf">
        85
      </td>
      <td style="color:#000000;background:#5fffd7;" title="#5fffd7">
        86
      </td>
      <td style="color:#000000;background:#5fffff;" title="#5fffff">
        87
      </td>
    </tr>
    <tr>
      <td style="color:#ffffff;background:#870000;" title="#870000">
        88
      </td>
      <td style="color:#ffffff;background:#87005f;" title="#87005f">
        89
      </td>
      <td style="color:#ffffff;background:#870087;" title="#870087">
        90
      </td>
      <td style="color:#ffffff;background:#8700af;" title="#8700af">
        91
      </td>
      <td style="color:#ffffff;background:#8700d7;" title="#8700d7">
        92
      </td>
      <td style="color:#ffffff;background:#8700ff;" title="#8700ff">
        93
      </td>
      <td style="color:#ffffff;background:#875f00;" title="#875f00">
        94
      </td>
      <td style="color:#ffffff;background:#875f5f;" title="#875f5f">
        95
      </td>
      <td style="color:#ffffff;background:#875f87;" title="#875f87">
        96
      </td>
      <td style="color:#ffffff;background:#875faf;" title="#875faf">
        97
      </td>
      <td style="color:#ffffff;background:#875fd7;" title="#875fd7">
        98
      </td>
      <td style="color:#ffffff;background:#875fff;" title="#875fff">
        99
      </td>
      <td style="color:#ffffff;background:#878700;" title="#878700">
        100
      </td>
      <td style="color:#ffffff;background:#87875f;" title="#87875f">
        101
      </td>
      <td style="color:#ffffff;background:#878787;" title="#878787">
        102
      </td>
      <td style="color:#ffffff;background:#8787af;" title="#8787af">
        103
      </td>
      <td style="color:#ffffff;background:#8787d7;" title="#8787d7">
        104
      </td>
      <td style="color:#ffffff;background:#8787ff;" title="#8787ff">
        105
      </td>
      <td style="color:#000000;background:#87af00;" title="#87af00">
        106
      </td>
      <td style="color:#000000;background:#87af5f;" title="#87af5f">
        107
      </td>
      <td style="color:#000000;background:#87af87;" title="#87af87">
        108
      </td>
      <td style="color:#000000;background:#87afaf;" title="#87afaf">
        109
      </td>
      <td style="color:#000000;background:#87afd7;" title="#87afd7">
        110
      </td>
      <td style="color:#000000;background:#87afff;" title="#87afff">
        111
      </td>
      <td style="color:#000000;background:#87d700;" title="#87d700">
        112
      </td>
      <td style="color:#000000;background:#87d75f;" title="#87d75f">
        113
      </td>
      <td style="color:#000000;background:#87d787;" title="#87d787">
        114
      </td>
      <td style="color:#000000;background:#87d7af;" title="#87d7af">
        115
      </td>
      <td style="color:#000000;background:#87d7d7;" title="#87d7d7">
        116
      </td>
      <td style="color:#000000;background:#87d7ff;" title="#87d7ff">
        117
      </td>
      <td style="color:#000000;background:#87ff00;" title="#87ff00">
        118
      </td>
      <td style="color:#000000;background:#87ff5f;" title="#87ff5f">
        119
      </td>
      <td style="color:#000000;background:#87ff87;" title="#87ff87">
        120
      </td>
      <td style="color:#000000;background:#87ffaf;" title="#87ffaf">
        121
      </td>
      <td style="color:#000000;background:#87ffd7;" title="#87ffd7">
        122
      </td>
      <td style="color:#000000;background:#87ffff;" title="#87ffff">
        123
      </td>
    </tr>
    <tr>
      <td style="color:#ffffff;background:#af0000;" title="#af0000">
        124
      </td>
      <td style="color:#ffffff;background:#af005f;" title="#af005f">
        125
      </td>
      <td style="color:#ffffff;background:#af0087;" title="#af0087">
        126
      </td>
      <td style="color:#ffffff;background:#af00af;" title="#af00af">
        127
      </td>
      <td style="color:#ffffff;background:#af00d7;" title="#af00d7">
        128
      </td>
      <td style="color:#ffffff;background:#af00ff;" title="#af00ff">
        129
      </td>
      <td style="color:#ffffff;background:#af5f00;" title="#af5f00">
        130
      </td>
      <td style="color:#ffffff;background:#af5f5f;" title="#af5f5f">
        131
      </td>
      <td style="color:#ffffff;background:#af5f87;" title="#af5f87">
        132
      </td>
      <td style="color:#ffffff;background:#af5faf;" title="#af5faf">
        133
      </td>
      <td style="color:#ffffff;background:#af5fd7;" title="#af5fd7">
        134
      </td>
      <td style="color:#ffffff;background:#af5fff;" title="#af5fff">
        135
      </td>
      <td style="color:#ffffff;background:#af8700;" title="#af8700">
        136
      </td>
      <td style="color:#ffffff;background:#af875f;" title="#af875f">
        137
      </td>
      <td style="color:#ffffff;background:#af8787;" title="#af8787">
        138
      </td>
      <td style="color:#ffffff;background:#af87af;" title="#af87af">
        139
      </td>
      <td style="color:#ffffff;background:#af87d7;" title="#af87d7">
        140
      </td>
      <td style="color:#ffffff;background:#af87ff;" title="#af87ff">
        141
      </td>
      <td style="color:#000000;background:#afaf00;" title="#afaf00">
        142
      </td>
      <td style="color:#000000;background:#afaf5f;" title="#afaf5f">
        143
      </td>
      <td style="color:#000000;background:#afaf87;" title="#afaf87">
        144
      </td>
      <td style="color:#000000;background:#afafaf;" title="#afafaf">
        145
      </td>
      <td style="color:#000000;background:#afafd7;" title="#afafd7">
        146
      </td>
      <td style="color:#000000;background:#afafff;" title="#afafff">
        147
      </td>
      <td style="color:#000000;background:#afd700;" title="#afd700">
        148
      </td>
      <td style="color:#000000;background:#afd75f;" title="#afd75f">
        149
      </td>
      <td style="color:#000000;background:#afd787;" title="#afd787">
        150
      </td>
      <td style="color:#000000;background:#afd7af;" title="#afd7af">
        151
      </td>
      <td style="color:#000000;background:#afd7d7;" title="#afd7d7">
        152
      </td>
      <td style="color:#000000;background:#afd7ff;" title="#afd7ff">
        153
      </td>
      <td style="color:#000000;background:#afff00;" title="#afff00">
        154
      </td>
      <td style="color:#000000;background:#afff5f;" title="#afff5f">
        155
      </td>
      <td style="color:#000000;background:#afff87;" title="#afff87">
        156
      </td>
      <td style="color:#000000;background:#afffaf;" title="#afffaf">
        157
      </td>
      <td style="color:#000000;background:#afffd7;" title="#afffd7">
        158
      </td>
      <td style="color:#000000;background:#afffff;" title="#afffff">
        159
      </td>
    </tr>
    <tr>
      <td style="color:#ffffff;background:#d70000;" title="#d70000">
        160
      </td>
      <td style="color:#ffffff;background:#d7005f;" title="#d7005f">
        161
      </td>
      <td style="color:#ffffff;background:#d70087;" title="#d70087">
        162
      </td>
      <td style="color:#ffffff;background:#d700af;" title="#d700af">
        163
      </td>
      <td style="color:#ffffff;background:#d700d7;" title="#d700d7">
        164
      </td>
      <td style="color:#ffffff;background:#d700ff;" title="#d700ff">
        165
      </td>
      <td style="color:#ffffff;background:#d75f00;" title="#d75f00">
        166
      </td>
      <td style="color:#ffffff;background:#d75f5f;" title="#d75f5f">
        167
      </td>
      <td style="color:#ffffff;background:#d75f87;" title="#d75f87">
        168
      </td>
      <td style="color:#ffffff;background:#d75faf;" title="#d75faf">
        169
      </td>
      <td style="color:#ffffff;background:#d75fd7;" title="#d75fd7">
        170
      </td>
      <td style="color:#ffffff;background:#d75fff;" title="#d75fff">
        171
      </td>
      <td style="color:#ffffff;background:#d78700;" title="#d78700">
        172
      </td>
      <td style="color:#ffffff;background:#d7875f;" title="#d7875f">
        173
      </td>
      <td style="color:#ffffff;background:#d78787;" title="#d78787">
        174
      </td>
      <td style="color:#ffffff;background:#d787af;" title="#d787af">
        175
      </td>
      <td style="color:#ffffff;background:#d787d7;" title="#d787d7">
        176
      </td>
      <td style="color:#ffffff;background:#d787ff;" title="#d787ff">
        177
      </td>
      <td style="color:#000000;background:#d7af00;" title="#d7af00">
        178
      </td>
      <td style="color:#000000;background:#d7af5f;" title="#d7af5f">
        179
      </td>
      <td style="color:#000000;background:#d7af87;" title="#d7af87">
        180
      </td>
      <td style="color:#000000;background:#d7afaf;" title="#d7afaf">
        181
      </td>
      <td style="color:#000000;background:#d7afd7;" title="#d7afd7">
        182
      </td>
      <td style="color:#000000;background:#d7afff;" title="#d7afff">
        183
      </td>
      <td style="color:#000000;background:#d7d700;" title="#d7d700">
        184
      </td>
      <td style="color:#000000;background:#d7d75f;" title="#d7d75f">
        185
      </td>
      <td style="color:#000000;background:#d7d787;" title="#d7d787">
        186
      </td>
      <td style="color:#000000;background:#d7d7af;" title="#d7d7af">
        187
      </td>
      <td style="color:#000000;background:#d7d7d7;" title="#d7d7d7">
        188
      </td>
      <td style="color:#000000;background:#d7d7ff;" title="#d7d7ff">
        189
      </td>
      <td style="color:#000000;background:#d7ff00;" title="#d7ff00">
        190
      </td>
      <td style="color:#000000;background:#d7ff5f;" title="#d7ff5f">
        191
      </td>
      <td style="color:#000000;background:#d7ff87;" title="#d7ff87">
        192
      </td>
      <td style="color:#000000;background:#d7ffaf;" title="#d7ffaf">
        193
      </td>
      <td style="color:#000000;background:#d7ffd7;" title="#d7ffd7">
        194
      </td>
      <td style="color:#000000;background:#d7ffff;" title="#d7ffff">
        195
      </td>
    </tr>
    <tr>
      <td style="color:#ffffff;background:#ff0000;" title="#ff0000">
        196
      </td>
      <td style="color:#ffffff;background:#ff005f;" title="#ff005f">
        197
      </td>
      <td style="color:#ffffff;background:#ff0087;" title="#ff0087">
        198
      </td>
      <td style="color:#ffffff;background:#ff00af;" title="#ff00af">
        199
      </td>
      <td style="color:#ffffff;background:#ff00d7;" title="#ff00d7">
        200
      </td>
      <td style="color:#ffffff;background:#ff00ff;" title="#ff00ff">
        201
      </td>
      <td style="color:#ffffff;background:#ff5f00;" title="#ff5f00">
        202
      </td>
      <td style="color:#ffffff;background:#ff5f5f;" title="#ff5f5f">
        203
      </td>
      <td style="color:#ffffff;background:#ff5f87;" title="#ff5f87">
        204
      </td>
      <td style="color:#ffffff;background:#ff5faf;" title="#ff5faf">
        205
      </td>
      <td style="color:#ffffff;background:#ff5fd7;" title="#ff5fd7">
        206
      </td>
      <td style="color:#ffffff;background:#ff5fff;" title="#ff5fff">
        207
      </td>
      <td style="color:#ffffff;background:#ff8700;" title="#ff8700">
        208
      </td>
      <td style="color:#ffffff;background:#ff875f;" title="#ff875f">
        209
      </td>
      <td style="color:#ffffff;background:#ff8787;" title="#ff8787">
        210
      </td>
      <td style="color:#ffffff;background:#ff87af;" title="#ff87af">
        211
      </td>
      <td style="color:#ffffff;background:#ff87d7;" title="#ff87d7">
        212
      </td>
      <td style="color:#ffffff;background:#ff87ff;" title="#ff87ff">
        213
      </td>
      <td style="color:#000000;background:#ffaf00;" title="#ffaf00">
        214
      </td>
      <td style="color:#000000;background:#ffaf5f;" title="#ffaf5f">
        215
      </td>
      <td style="color:#000000;background:#ffaf87;" title="#ffaf87">
        216
      </td>
      <td style="color:#000000;background:#ffafaf;" title="#ffafaf">
        217
      </td>
      <td style="color:#000000;background:#ffafd7;" title="#ffafd7">
        218
      </td>
      <td style="color:#000000;background:#ffafff;" title="#ffafff">
        219
      </td>
      <td style="color:#000000;background:#ffd700;" title="#ffd700">
        220
      </td>
      <td style="color:#000000;background:#ffd75f;" title="#ffd75f">
        221
      </td>
      <td style="color:#000000;background:#ffd787;" title="#ffd787">
        222
      </td>
      <td style="color:#000000;background:#ffd7af;" title="#ffd7af">
        223
      </td>
      <td style="color:#000000;background:#ffd7d7;" title="#ffd7d7">
        224
      </td>
      <td style="color:#000000;background:#ffd7ff;" title="#ffd7ff">
        225
      </td>
      <td style="color:#000000;background:#ffff00;" title="#ffff00">
        226
      </td>
      <td style="color:#000000;background:#ffff5f;" title="#ffff5f">
        227
      </td>
      <td style="color:#000000;background:#ffff87;" title="#ffff87">
        228
      </td>
      <td style="color:#000000;background:#ffffaf;" title="#ffffaf">
        229
      </td>
      <td style="color:#000000;background:#ffffd7;" title="#ffffd7">
        230
      </td>
      <td style="color:#000000;background:#ffffff;" title="#ffffff">
        231
      </td>
    </tr>
    <tr>
      <td colspan="36">Grayscale colors
      </td>
    </tr>
    <tr>
      <td colspan="36">
        <table style="width:100%;text-align:center;font-weight:bold;">
          <tbody>
            <tr>
              <td style="color:#ffffff;background:#080808;" title="#080808">
                232
              </td>
              <td style="color:#ffffff;background:#121212;" title="#121212">
                233
              </td>
              <td style="color:#ffffff;background:#1c1c1c;" title="#1c1c1c">
                234
              </td>
              <td style="color:#ffffff;background:#262626;" title="#262626">
                235
              </td>
              <td style="color:#ffffff;background:#303030;" title="#303030">
                236
              </td>
              <td style="color:#ffffff;background:#3a3a3a;" title="#3a3a3a">
                237
              </td>
              <td style="color:#ffffff;background:#444444;" title="#444444">
                238
              </td>
              <td style="color:#ffffff;background:#4e4e4e;" title="#4e4e4e">
                239
              </td>
              <td style="color:#ffffff;background:#585858;" title="#585858">
                240
              </td>
              <td style="color:#ffffff;background:#626262;" title="#626262">
                241
              </td>
              <td style="color:#ffffff;background:#6c6c6c;" title="#6c6c6c">
                242
              </td>
              <td style="color:#ffffff;background:#767676;" title="#767676">
                243
              </td>
              <td style="color:#000000;background:#808080;" title="#808080">
                244
              </td>
              <td style="color:#000000;background:#8a8a8a;" title="#8a8a8a">
                245
              </td>
              <td style="color:#000000;background:#949494;" title="#949494">
                246
              </td>
              <td style="color:#000000;background:#9e9e9e;" title="#9e9e9e">
                247
              </td>
              <td style="color:#000000;background:#a8a8a8;" title="#a8a8a8">
                248
              </td>
              <td style="color:#000000;background:#b2b2b2;" title="#b2b2b2">
                249
              </td>
              <td style="color:#000000;background:#bcbcbc;" title="#bcbcbc">
                250
              </td>
              <td style="color:#000000;background:#c6c6c6;" title="#c6c6c6">
                251
              </td>
              <td style="color:#000000;background:#d0d0d0;" title="#d0d0d0">
                252
              </td>
              <td style="color:#000000;background:#dadada;" title="#dadada">
                253
              </td>
              <td style="color:#000000;background:#e4e4e4;" title="#e4e4e4">
                254
              </td>
              <td style="color:#000000;background:#eeeeee;" title="#eeeeee">
                255
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
```
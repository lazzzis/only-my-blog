title: test
date: 2015-10-18 16:08:43
tags: test
categories: test
---

The purpose of this post is to help you make sure all of HTML elements can display properly. If you use CSS reset, don't forget to redefine the style by yourself.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Paragraph

Lorem ipsum dolor sit amet, [test link]() consectetur adipiscing elit. **Strong text** pellentesque ligula commodo viverra vehicula. *Italic text* at ullamcorper enim. Morbi a euismod nibh. <u>Underline text</u> non elit nisl. ~~Deleted text~~ tristique, sem id condimentum tempus, metus lectus venenatis mauris, sit amet semper lorem felis a eros. Fusce egestas nibh at sagittis auctor. Sed ultricies ac arcu quis molestie. Donec dapibus nunc in nibh egestas, vitae volutpat sem iaculis. Curabitur sem tellus, elementum nec quam id, fermentum laoreet mi. Ut mollis ullamcorper turpis, vitae facilisis velit ultricies sit amet. Etiam laoreet dui odio, id tempus justo tincidunt id. Phasellus scelerisque nunc sed nunc ultricies accumsan.

Interdum et malesuada fames ac ante ipsum primis in faucibus. `Sed erat diam`, blandit eget felis aliquam, rhoncus varius urna. Donec tellus sapien, sodales eget ante vitae, feugiat ullamcorper urna. Praesent auctor dui vitae dapibus eleifend. Proin viverra mollis neque, ut ullamcorper elit posuere eget.

> Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.

Maecenas ornare arcu at mi suscipit, non molestie tortor ultrices. Aenean convallis, diam et congue ultricies, erat magna tincidunt orci, pulvinar posuere mi sapien ac magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent vitae placerat mauris. Nullam laoreet ante posuere tortor blandit auctor. Sed id ligula volutpat leo consequat placerat. Mauris fermentum dolor sed augue malesuada sollicitudin. Vivamus ultrices nunc felis, quis viverra orci eleifend ut. Donec et quam id urna cursus posuere. Donec elementum scelerisque laoreet.

## List Types

### Definition List (dl)

<dl><dt>Definition List Title</dt><dd>This is a definition list division.</dd></dl>

### Ordered List (ol)

1. List Item 1
2. List Item 2
3. List Item 3

### Unordered List (ul)

- List Item 1
- List Item 2
- List Item 3

## Table

| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |

## Misc Stuff - abbr, acronym, sub, sup, etc.

Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr>


```python
N = int(input())
arr = [int(item) for item in input().split()]

ans, pivot, prior = 1, 0, -1
for item in arr:
    if item > prior:
        pivot = pivot + 1
        if pivot > ans:
            ans = pivot
    else:
        pivot = 1
    prior = item

print(ans)
```



这是一个 `test`;



**Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium ** elementum tellus, *at lacinia nisl scelerisque* euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam consectetur laoreet ante id auctor. Donec placerat tortor eget tellus aliquam vestibulum. Integer nec bibendum libero, sit amet aliquam libero. Proin elementum dolor ut consectetur blandit. Ut hendrerit porta sapien. Fusce ullamcorper dui risus, in mattis ipsum commodo a. Mauris et ante sem. Proin tincidunt malesuada urna non consequat. Integer tincidunt tincidunt eros, vel fermentum sem elementum vel. Suspendisse potenti. `Praesent et nulla id magna venenatis semper a eu nisl`.



《**王牌大律師**》（[日語](https://zh.wikipedia.org/wiki/%E6%97%A5%E8%AF%AD)：**リーガル・ハイ/リーガルハイ**）（中國大陸譯名：**勝利即是正義**、俗稱：**李狗嗨**、台灣譯名：**王牌大律師**、香港譯名：**王牌大律師**）是[富士電視台](https://zh.wikipedia.org/wiki/%E5%AF%8C%E5%A3%AB%E9%9B%BB%E8%A6%96%E5%8F%B0)[系列](https://zh.wikipedia.org/wiki/%E5%AF%8C%E5%A3%AB%E9%9B%BB%E8%A6%96%E7%B6%B2)播放的日本[電視劇](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%A6%96%E5%8A%87)。編劇為[古澤良太](https://zh.wikipedia.org/wiki/%E5%8F%A4%E6%BE%A4%E8%89%AF%E5%A4%AA)。2012年4月17日開始在[週二21時（火9）時段](https://zh.wikipedia.org/wiki/%E5%AF%8C%E5%A3%AB%E9%9B%BB%E8%A6%96%E5%8F%B0%E9%80%B1%E4%BA%8C%E6%99%9A%E9%96%93%E4%B9%9D%E9%BB%9E%E9%80%A3%E7%BA%8C%E5%8A%87)與2013年4月13日在[週六獎賞](https://zh.wikipedia.org/w/index.php?title=%E9%80%B1%E5%85%AD%E7%8D%8E%E8%B3%9E&action=edit&redlink=1)以「**リーガル・ハイ**」為標題播放第一季與特別篇。2013年10月9日開始在[週三22時（水10）時段](https://zh.wikipedia.org/wiki/%E5%AF%8C%E5%A3%AB%E9%9B%BB%E8%A6%96%E5%8F%B0%E9%80%B1%E4%B8%89%E6%99%9A%E9%96%93%E5%8D%81%E9%BB%9E%E9%80%A3%E7%BA%8C%E5%8A%87)與2014年11月22日在週六獎賞以「**リーガルハイ**」為標題播放第二季與特別篇。

黛真知子（[新垣結衣](https://zh.wikipedia.org/wiki/%E6%96%B0%E5%9E%A3%E7%B5%90%E8%A1%A3) 飾）*是一個充滿著正義感、憑著大無畏的精神*，一股腦兒向前衝的熱血新進律師。因為一次訴訟而認識法律界神話—古美門研介（[堺雅人](https://zh.wikipedia.org/wiki/%E5%A0%BA%E9%9B%85%E4%BA%BA) 飾），一位毒舌、傲慢、自大，為了勝訴不擇手段，穿梭在法律灰色地帶但擁有著不敗紀錄的知名律師，此後並開始到古美門律師事務所工作。性格與想法完全地南轅北轍的兩人，在一次又一次的訴訟中不斷發生衝突，但同時又在法庭上攜手戰鬥。一對冤家拍擋緊守各自的信念，`衝擊著日本司法界，要在公平與正義之間，還司法制度一個真面目`[[1\]](https://zh.wikipedia.org/wiki/Legal_high#cite_note-1)。



> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium elementum tellus, at lacinia nisl scelerisque euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam consectetur laoreet ante id auctor. Donec placerat tortor eget tellus aliquam vestibulum. Integer nec bibendum libero, sit amet aliquam libero. Proin elementum dolor ut consectetur blandit. Ut hendrerit porta sapien. Fusce ullamcorper dui risus, in mattis ipsum commodo a. Mauris et ante sem. Proin tincidunt malesuada urna non consequat. Integer tincidunt tincidunt eros, vel fermentum sem elementum vel. Suspendisse potenti. Praesent et nulla id magna venenatis semper a eu nisl.

## Images

![Pixiv ID: 37587582](https://s13.postimg.org/og2jkqe3b/37587582_p0.png)

![Pixiv ID: 37443561](https://s13.postimg.org/55ezgwkkn/37443561_p0.jpg)

## Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/idZj_G4yER8" frameborder="0" allowfullscreen></iframe>

## Katex

```katex
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```

```katex
x = \begin{cases}
   a &\text{if } b  \\
   c &\text{if } d
\end{cases}
```

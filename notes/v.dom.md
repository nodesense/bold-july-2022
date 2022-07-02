```
snapshot - initial v.dom [creation]

<div>
<h2>Counter</h2>
<p>Counter is 100</p>
<button >+1</button>
<button>-1</button>
</div>

+1

new v.dom [update] [whole new v.doms too many objects]

<div>
<h2>Counter</h2>
<p>Counter is 101</p>
<button >+1</button>
<button>-1</button>
</div>

diff prev v.dom with new .v dom [many objects diffed]
find the difference 

    text node is changed from 100 to 101 [only 1 dom is patched]

patch 101 to REAL DOM 
```
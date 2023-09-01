## reactive对比ref

-  从定义数据角度对比：
   -  ref用来定义：<strong style="color:red">基本类型数据</strong>。
   -  reactive用来定义：<strong style="color:red">对象（或数组）类型数据</strong>。
   -  备注：ref也可以用来定义<strong style="color:red">对象（或数组）类型数据</strong>, 它内部会自动通过```reactive```转为<strong style="color:red">代理对象</strong>。
   -  备注2：reactive取巧，把基本类型数据用对象包裹，再定义对象。
-  从原理角度对比：
   -  ref通过``Object.defineProperty()``的```get```与```set```来实现响应式（数据劫持）。
   -  reactive通过使用<strong style="color:red">Proxy</strong>来实现响应式（数据劫持）, 并通过<strong style="color:red">Reflect</strong>操作<strong style="color:orange">源对象</strong>内部的数据。
-  从使用角度对比：
   -  ref定义的数据：操作数据<strong style="color:red">需要</strong>```.value```，读取数据时模板自动解析直接读取<strong style="color:red">不需要</strong>```.value```。
   -  reactive定义的数据：操作数据与读取数据：<strong style="color:red">均不需要</strong>```.value```。
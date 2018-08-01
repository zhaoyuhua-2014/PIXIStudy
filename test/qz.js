! function() {
	function n() {
		a("bg"),
			t("start"),
			t("end")
	}

	function a(n) {
		var a = document.getElementById(n),
			t = function() {
				document.removeEventListener("WeixinJSBridgeReady", t),
					document.removeEventListener("YixinJSBridgeReady", t),
					a.play()
			};
		/(Android)/i.test(navigator.userAgent) && NewsAppClient.isNewsApp() && $("body").one("touchstart", function() {
				a.play()
			}),
			document.addEventListener("WeixinJSBridgeReady", t, !1),
			document.addEventListener("YixinJSBridgeReady", t, !1)
	}

	function t(n) {
		var a = document.getElementById(n),
			t = function() {
				document.removeEventListener("WeixinJSBridgeReady", t),
					document.removeEventListener("YixinJSBridgeReady", t),
					a.play(),
					a.pause()
			};
		document.addEventListener("WeixinJSBridgeReady", t, !1),
			document.addEventListener("YixinJSBridgeReady", t, !1)
	}

	function i() {
		C.add(imgInfo + "start/hand.png").add(imgInfo + "start/text.png").add(imgInfo + "transition/tree_1.png").add(imgInfo + "transition/transition23.png").add(imgInfo + "transition/transition34.png").add(imgInfo + "transition/transition45.png").add(imgInfo + "transition/transition45_2.png").add(imgInfo + "transition/tunnel.png").add(imgInfo + "transition/m0.png").add(imgInfo + "logo.png").add(imgInfo + "text/close.png").add(imgInfo + "text/t1_1.png").add(imgInfo + "text/t1_2.png").add(imgInfo + "text/t1_3.png").add(imgInfo + "text/t2_1.png").add(imgInfo + "text/t2_2.png").add(imgInfo + "text/t2_3.png").add(imgInfo + "text/t3.png").add(imgInfo + "text/t4_1.png").add(imgInfo + "text/t4_2.png").add(imgInfo + "text/t4_3.png").add(imgInfo + "text/t5_1.png").add(imgInfo + "text/t5_2.png").add(imgInfo + "text/t6_1.png").add(imgInfo + "text/t6_2.png").add(imgInfo + "text/t7_1.png").add(imgInfo + "text/t7_2.png").add(imgInfo + "text/t8_1.png").add(imgInfo + "text/tt8_2.png").add(imgInfo + "text/pp1.png").add(imgInfo + "text/pp3_1.png").add(imgInfo + "text/pp3_2.png").add(imgInfo + "text/pp4_1.png").add(imgInfo + "text/pp4_2.png").add(imgInfo + "text/pp5.png").add(imgInfo + "text/pp6.png").add(imgInfo + "text/pp7_1.png").add(imgInfo + "text/pp7_2.png").add(imgInfo + "1/bg.jpg").add(imgInfo + "1/door.png").add(imgInfo + "1/1.png").add(imgInfo + "1/2-1.png").add(imgInfo + "1/2-2.png").add(imgInfo + "1/3.png").add(imgInfo + "1/4.png").add(imgInfo + "1/5.png").add(imgInfo + "1/6.png").add(imgInfo + "2/bg.png").add(imgInfo + "2/star.png").add(imgInfo + "2/car1.png").add(imgInfo + "2/car2.png").add(imgInfo + "2/cow1.png").add(imgInfo + "2/cow2.png").add(imgInfo + "2/m0.png").add(imgInfo + "2/m1.png").add(imgInfo + "2/m2.png").add(imgInfo + "2/cover.png").add(imgInfo + "3/bg.jpg").add(imgInfo + "3/cloud.png").add(imgInfo + "3/m3.png").add(imgInfo + "3/m2.png").add(imgInfo + "3/m1.png").add(imgInfo + "3/ground.png").add(imgInfo + "3/tunnel.png").add(imgInfo + "3/tunnel2.png").add(imgInfo + "3/cows.png").add(imgInfo + "4/bg.jpg").add(imgInfo + "4/animal1.png").add(imgInfo + "4/animal2.png").add(imgInfo + "4/animal3.png").add(imgInfo + "4/animal4.png").add(imgInfo + "4/animal5.png").add(imgInfo + "4/cloud4.png").add(imgInfo + "4/cover.png").add(imgInfo + "4/guidao.png").add(imgInfo + "4/mm.png").add(imgInfo + "4/sun.png").add(imgInfo + "4/train.png").add(imgInfo + "5/bg.png").add(imgInfo + "5/cloud.png").add(imgInfo + "5/ground.png").add(imgInfo + "5/m2.png").add(imgInfo + "5/m3.png").add(imgInfo + "5/mm.png").add(imgInfo + "5/sitcow.png").add(imgInfo + "5/animal1.png").add(imgInfo + "5/cow2.png").add(imgInfo + "6/bg.png").add(imgInfo + "6/cloud.png").add(imgInfo + "6/mm.png").add(imgInfo + "6/lake.png").add(imgInfo + "6/cloud2.png").add(imgInfo + "6/mm2.png").add(imgInfo + "6/animal1.png").add(imgInfo + "6/animal2.png").add(imgInfo + "6/animal3.png").add(imgInfo + "6/glass.png").add(imgInfo + "6/house.png").add(imgInfo + "7/bg.png").add(imgInfo + "7/cloud.png").add(imgInfo + "7/m1.png").add(imgInfo + "7/m2.png").add(imgInfo + "7/m3.png").add(imgInfo + "7/m4.png").add(imgInfo + "7/ground.png").add(imgInfo + "8/bg78.png").add(imgInfo + "8/bg.png").add(imgInfo + "8/star.png").add(imgInfo + "8/mm.png").add(imgInfo + "8/ground.png").add(imgInfo + "8/building.png").add(imgInfo + "8/people.png").add(imgInfo + "8/train.png").add(imgInfo + "end/end.png").add(imgInfo + "end/share.png").add(imgInfo + "end/reset.png").add(imgInfo + "common-share-tip.png").on("progress", I).load(e)
	}

	function e() {
		function n(n, a) {
			var t = new F;
			t.beginFill(16777215, b1Data[0].opacity),
				t.drawCircle(0, 0, b1Data[0].r),
				t.endFill(),
				new TWEEN.Tween(b1Data[1]).to(b1Data[2], 1120).onUpdate(function() {
					t.alpha = this.opc,
						t.scale.set(this.scale)
				}).repeat(1 / 0).start();
			var i = new F;
			i.beginFill(16777215, b2Data[0].opacity),
				i.drawCircle(0, 0, b2Data[0].r),
				i.endFill(),
				new TWEEN.Tween(b2Data[1]).to(b2Data[2], 1120).onUpdate(function() {
					i.alpha = this.opc,
						i.scale.set(this.scale)
				}).repeat(1 / 0).start();
			var e = new F;
			e.beginFill(16777215, b3Data[0].opacity),
				e.drawCircle(0, 0, b3Data[0].r),
				e.endFill(),
				new TWEEN.Tween(b3Data[1]).to(b3Data[2], 1120).onUpdate(function() {
					e.alpha = this.opc,
						e.scale.set(this.scale)
				}).repeat(1 / 0).start();
			var o = new F;
			o.beginFill(16777215, b4Data[0].opacity),
				o.drawCircle(0, 0, b4Data[0].r),
				o.endFill(),
				new TWEEN.Tween(b4Data[1]).to(b4Data[2], 1120).onUpdate(function() {
					o.alpha = this.opc,
						o.scale.set(this.scale)
				}).repeat(1 / 0).start();
			var d = new F;
			d.beginFill(16711680, 0),
				d.drawCircle(0, 0, 100),
				d.endFill(),
				n.addChild(t, i, e, o, d),
				n.interactive = !0,
				n.on("touchend", function() {
					a.alpha = 1,
						n.alpha = 0
				})
		}
		$("#percent").html("100%"),
			setTimeout(function() {
				$("#loading").fadeOut(300)
			}, 300),
			m(),
			N = new P,
			B = new P,
			j = new S(C.resources[imgInfo + "transition/tree_1.png"].texture),
			j.position.set(3150, 0),
			L = new P,
			L.position.set(3500, 0),
			U = new S(C.resources[imgInfo + "transition/transition23.png"].texture),
			U.position.set(6800, 0),
			A = new P,
			A.position.set(7800, 0),
			H = new S(C.resources[imgInfo + "transition/transition34.png"].texture),
			H.position.set(11030, 0),
			z = new P,
			z.position.set(11600, 0),
			O = new S(C.resources[imgInfo + "transition/transition45.png"].texture),
			O.position.set(15059, 253),
			G = new S(C.resources[imgInfo + "transition/transition45_2.png"].texture),
			G.position.set(15161, 408),
			J = new P,
			J.position.set(15258, 0),
			transition67 = new S(C.resources[imgInfo + "transition/m0.png"].texture),
			transition67.position.set(22715, 80),
			transition67_2 = new S(C.resources[imgInfo + "transition/tunnel.png"].texture),
			transition67_2.position.set(22736, 0),
			M = new P,
			M.position.set(22550, 0),
			q = new P,
			q.position.set(0, 0),
			Y = new P,
			Y.position.set(E + v - 322, 0),
			un = [c1Data, c2Data, c3Data, c4Data, c56Data, c78Data, textData, endData],
			In = [B, L, A, z, J, M, q, Y];
		for(var a = 0; a < In.length; a++)
			for(var t = 0; t < un[a].length; t++) {
				var i = new S(C.resources[un[a][t].url].texture);
				i.position.set(un[a][t].position.x, un[a][t].position.y),
					i.name = un[a][t].name,
					i.data = un[a][t],
					void 0 !== i.data.opacity && (i.alpha = i.data.opacity),
					In[a].addChild(i)
			}
		p();
		var e = Y.children[1],
			o = Y.children[2];
		e.interactive = !0,
			e.buttonMode = !0,
			o.interactive = !0,
			o.buttonMode = !0,
			e.on("touchend", function() {
				var n = $("#common-share");
				NewsAppClient.isNewsApp() ? NewsAppClient.share() : (n.fadeIn(300),
					setTimeout(function() {
						n.fadeOut(300)
					}, 2e3))
			}),
			o.on("touchend", function() {
				location.reload()
			}),
			Q = new P,
			K = new P,
			V = new P,
			Z = new P,
			nn = new P,
			an = new P,
			tn = new P,
			en = new P,
			on = new P;
		for(var d = [Q, K, V, Z, nn, an, tn, en, on], a = 0; a < d.length; a++) {
			d[a].position.set(popData[a].position.x, popData[a].position.y);
			var i = new S(C.resources[popData[a].url].texture),
				g = new S(C.resources[imgInfo + "text/close.png"].texture);
			g.position.set(346, 524),
				g.interactive = !0,
				g.on("touchend", function() {
					Q.alpha = 0,
						K.alpha = 0,
						V.alpha = 0,
						Z.alpha = 0,
						nn.alpha = 0,
						an.alpha = 0,
						tn.alpha = 0,
						en.alpha = 0,
						on.alpha = 0,
						dn.alpha = 1,
						gn.alpha = 1,
						pn.alpha = 1,
						sn.alpha = 1,
						rn.alpha = 1,
						cn.alpha = 1,
						mn.alpha = 1,
						ln.alpha = 1,
						fn.alpha = 1
				}),
				0 == a && g.on("touchend", function() {
					musicData[0].isPlayed = !1,
						musicData[0].video.pause()
				}),
				d[a].addChild(i, g),
				d[a].alpha = 0
		}
		dn = new P,
			gn = new P,
			pn = new P,
			sn = new P,
			rn = new P,
			cn = new P,
			mn = new P,
			ln = new P,
			fn = new P;
		for(var f = [dn, gn, pn, sn, rn, cn, mn, ln, fn], a = 0; a < f.length; a++)
			f[a].position.set(btnData[a].position.x, btnData[a].position.y);
		n(dn, Q),
			n(gn, K),
			n(pn, V),
			n(sn, Z),
			n(rn, nn),
			n(cn, an),
			n(mn, tn),
			n(ln, en),
			n(fn, on),
			dn.on("touchend", function() {
				musicData[0].isPlayed || (musicData[0].isPlayed = !0,
					musicData[0].video.play())
			}),
			k.addChild(N),
			vn = Math.PI / 2,
			k.rotation = vn,
			k.position.set(x, 0),
			N.addChild(B, L, j, A, U, z, H, M, J, G, O, transition67, transition67_2, q, dn, gn, pn, sn, rn, cn, mn, ln, fn, Q, K, V, Z, nn, an, tn, en, on, Y, X),
			k.scale.set(w, w),
			k.interactive = !0,
			k.buttonMode = !0,
			k.on("touchstart", s).on("touchmove", r).on("touchend", c),
			l(),
			xn.setDimensions(x, v, x, E + v),
			wn.render(k),
			h()
	}

	function o(n, a, t) {
		var i, e;
		if(vn > 0 ? (e = a,
				i = n) : (e = n,
				i = a),
			X.alpha = 1,
			e > 0 && e <= 2e3 && (X.alpha = 0),
			e > 0 && e <= 1750)
			for(var o = 0; o < B.children.length; o++) {
				var g = B.children[o],
					p = e,
					s = 0;
				d(g, e, s)
			}
		if(e > 1750 && e <= 6800) {
			var p = e - 1750,
				s = 3500;
			j.position.x = 3150 - .12 * p;
			for(var o = 0; o < L.children.length; o++) {
				var g = L.children[o];
				d(g, e, s)
			}
		}
		if(e > 6800) {
			var p = e - 6800,
				s = 7800;
			U.position.x = 6800 - .3 * p;
			for(var o = 0; o < A.children.length; o++) {
				var g = A.children[o];
				d(g, e, s)
			}
		}
		if(e > 11030) {
			var p = e - 11030,
				s = 11600;
			H.position.x = 11030 - .3 * p;
			for(var o = 0; o < z.children.length; o++) {
				var g = z.children[o];
				d(g, e, s)
			}
		}
		if(e > 15258) {
			var p = e - 15258,
				s = 15258;
			O.position.x = 15059 - .3 * p,
				G.position.x = 15161 - .2 * p,
				cn.position.x = btnData[5].position.x - .3 * p;
			for(var o = 0; o < J.children.length; o++) {
				var g = J.children[o];
				d(g, e, s)
			}
		}
		if(e > 22550) {
			var p = e - 22550,
				s = 22550;
			transition67.position.x = 22715 - .3 * p,
				transition67_2.position.x = 22736 - .2 * p,
				ln.position.x = btnData[7].position.x - .2 * p;
			for(var o = 0; o < M.children.length; o++) {
				var g = M.children[o];
				d(g, e, s)
			}
		}
		if(e >= 0)
			for(var s = 0, o = 0; o < q.children.length; o++) {
				var g = q.children[o];
				d(g, e, s)
			}
		e > musicData[0].end && (musicData[0].isPlayed = !1,
				musicData[0].video.pause()),
			e > musicData[1].start ? musicData[1].isPlayed || (musicData[1].isPlayed = !0,
				musicData[1].video.play()) : (musicData[1].isPlayed = !1,
				musicData[1].video.pause()),
			N.position.x = -e,
			N.position.y = -i
	}

	function d(n, a, t) {
		var i = a - t;
		if(n.data.speed && (n.position.x = n.data.position.x + n.data.speed.x * i,
				n.position.y = n.data.position.y + n.data.speed.y * i),
			n.data.move) {
			var e = n.data.move.end,
				o = n.data.move.start,
				d = n.data.position.x,
				p = n.data.position.y,
				s = n.data.move.x,
				r = n.data.move.y;
			n.position.x = g(a, o, e, d, s),
				n.position.y = g(a, o, e, p, r)
		}
		if(n.data.opacity_position) {
			var e = n.data.opacity_position.end,
				o = n.data.opacity_position.start,
				c = n.data.opacity_position.opacity,
				m = n.data.opacity;
			n.alpha = g(a, o, e, m, c)
		}
		if(n.data.scale_change) {
			var e = n.data.scale_change.end,
				o = n.data.scale_change.start,
				l = n.data.scale.scale_x,
				f = n.data.scale.scale_y,
				u = n.data.scale_change.scale_x,
				I = n.data.scale_change.scale_y,
				h = g(a, o, e, l, u),
				w = g(a, o, e, f, I);
			n.scale.set(h, w)
		}
	}

	function g(n, a, t, i, e) {
		if(n >= a && n <= t) {
			var o = (e - i) / (t - a),
				d = e - o * t;
			y = o * n + d
		} else
			n > t ? y = e : y = i;
		return y
	}

	function p() {
		X = new P;
		var n = new S(C.resources[imgInfo + "start/hand.png"].texture);
		n.position.set((R - 61) / 2 + 100, 483),
			hn = new TWEEN.Tween(n.position).to({
				x: (R - 61) / 2 - 100
			}, 1e3).delay(300).repeat(1 / 0).easing(TWEEN.Easing.Quadratic.Out).start();
		var a = new S(C.resources[imgInfo + "start/text.png"].texture);
		a.position.set((R - 133) / 2, 610);
		var t = new F;
		t.beginFill(0),
			t.drawRect(0, 0, 2e3, 750),
			t.endFill(),
			t.alpha = .35,
			X.addChild(t, n, a)
	}

	function s(n) {
		var a = n.data.originalEvent;
		D = !0,
			xn.doTouchStart(a.touches, a.timeStamp)
	}

	function r(n) {
		if(D) {
			var a = n.data.originalEvent;
			xn.doTouchMove(a.touches, a.timeStamp, a.scale)
		}
	}

	function c(n) {
		var a = n.data.originalEvent;
		xn.doTouchEnd(a.timeStamp),
			D = !1
	}

	function m() {
		x = window.innerWidth,
			v = window.innerHeight,
			x < v ? (w = x / 750,
				R = v / w,
				f(0)) : (w = v / 750,
				R = x / w,
				f(1))
	}

	function l() {
		switch(window.orientation) {
			case 0:
				setTimeout(function() {
					m(),
						vn = Math.PI / 2,
						k.rotation = vn,
						k.scale.set(w, w),
						wn.resize(x, v),
						k.position.set(x, 0),
						b = xn.__scrollLeft,
						f(0),
						setTimeout(function() {
							xn.setDimensions(x, v, x, E + v),
								xn.scrollTo(0, b, !1),
								R = v / w
						}, 200)
				}, 300);
				break;
			case -90:
			case 90:
				setTimeout(function() {
					m(),
						vn = 0,
						k.rotation = vn,
						k.scale.set(w, w),
						wn.resize(x, v),
						k.position.set(0, 0),
						_ = xn.__scrollTop,
						f(1),
						setTimeout(function() {
							xn.setDimensions(x, v, T + x, v),
								xn.scrollTo(_, 0, !1),
								R = x / w
						}, 200)
				}, 300);
				break;
			case 180:
		}
		R = x < v ? v / w : x / w
	}

	function f(n) {
		0 === n ? $("#loading").css({
			top: "488px"
		}) : $("#loading").css({
			top: "80px"
		})
	}

	function u() {
		return !(!/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()) || /pc=1/.test(location.search))
	}

	function I(n, a) {
		var t = parseInt(n.progress);
		$("#percent").html(t + "%")
	}

	function h() {
		TWEEN.update(),
			requestAnimationFrame(h),
			wn.render(k)
	}
	var w, v = window.innerHeight,
		x = window.innerWidth,
		_ = 0,
		b = 0,
		D = !1,
		E = 31200,
		T = 30400,
		P = PIXI.Container,
		C = (PIXI.autoDetectRenderer,
			PIXI.loader),
		S = (PIXI.loader.resources,
			PIXI.utils.TextureCache,
			PIXI.Texture,
			PIXI.Text,
			new PIXI.ticker.Ticker,
			PIXI.Sprite),
		F = (PIXI.Rectangle,
			PIXI.Graphics),
		W = u();
	if(!W) {
		var x = 640,
			v = window.innerHeight;
		return $(".railway_qingzang_content").height(v),
			$(".railway_qingzang_content").html(""),
			void $(".railway_qingzang_content").css({
				"background-color": "#eee",
				"background-image": "url(http://cms-bucket.nosdn.127.net/150ad6944b224742bad9c9cc5e0a42dc20171115164914.jpeg)",
				"background-repeat": "no-repeat",
				"background-position": "center 100px",
				"background-size": "639px 396px"
			})
	}
	n();
	var k = new P;
	k.width = x,
		k.height = v;
	var N, R, X, B, L, A, z, J, M, q, Y, j, U, H, O, G, Q, K, V, Z, nn, an, tn, en, on, dn, gn, pn, sn, rn, cn, mn, ln, fn, un, In, hn, wn = new PIXI.CanvasRenderer(x, v),
		vn = 0;
	$(".railway_qingzang_content")[0].appendChild(wn.view),
		i(),
		m(),
		window.onorientationchange = l;
	var xn = new Scroller(o, {
		zooming: !1,
		animating: !0,
		bouncing: !1,
		animationDuration: 1e3
	});
	xn.__enableScrollY = !0
}();
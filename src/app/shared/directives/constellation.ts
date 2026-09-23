import { afterNextRender, Directive, ElementRef, inject, NgZone, OnDestroy } from '@angular/core';

@Directive({
  selector: 'canvas[appConstellation]',
})
export class Constellation implements OnDestroy {
  private readonly canvas = inject(ElementRef<HTMLCanvasElement>).nativeElement;
  private readonly zone = inject(NgZone);
  private frame = 0;
  private resizeObserver?: ResizeObserver;

  constructor() {
    afterNextRender(() => this.start());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frame);
    this.resizeObserver?.disconnect();
  }

  private start(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = this.canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let points: Array<{ x: number; y: number; vx: number; vy: number }> = [];

    const resize = (): void => {
      const parent = this.canvas.parentElement;
      if (!parent) {
        return;
      }
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.floor((rect.width * rect.height) / 20000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
      }));
    };

    const tick = (): void => {
      const parent = this.canvas.parentElement;
      if (!parent) {
        return;
      }
      const rect = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const point of points) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > rect.width) {
          point.vx *= -1;
        }
        if (point.y < 0 || point.y > rect.height) {
          point.vy *= -1;
        }
      }
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(207, 214, 0, ${(1 - distance / 120) * 0.28})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
      for (const point of points) {
        ctx.fillStyle = 'rgba(255, 255, 230, 0.8)';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
      this.frame = requestAnimationFrame(tick);
    };

    this.zone.runOutsideAngular(() => {
      resize();
      this.resizeObserver = new ResizeObserver(resize);
      if (this.canvas.parentElement) {
        this.resizeObserver.observe(this.canvas.parentElement);
      }
      tick();
    });
  }
}

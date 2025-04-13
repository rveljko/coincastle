import KeyboardArrowIcon from '@icons/keyboard-arrow-icon'

export default function Keyboard() {
  return (
    <div className="relative w-195">
      <div className="border-clickable/30 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
      <div className="flex w-full flex-col gap-2 p-2">
        <div className="flex items-center gap-2">
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">~</span>
              <span className="leading-[1] select-none">`</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">!</span>
              <span className="leading-[1] select-none">1</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">@</span>
              <span className="leading-[1] select-none">2</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">#</span>
              <span className="leading-[1] select-none">3</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">$</span>
              <span className="leading-[1] select-none">4</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">%</span>
              <span className="leading-[1] select-none">5</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">^</span>
              <span className="leading-[1] select-none">6</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">&</span>
              <span className="leading-[1] select-none">7</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">*</span>
              <span className="leading-[1] select-none">8</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">(</span>
              <span className="leading-[1] select-none">9</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">)</span>
              <span className="leading-[1] select-none">0</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">_</span>
              <span className="leading-[1] select-none">-</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">+</span>
              <span className="leading-[1] select-none">=</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-22 items-end justify-end rounded-md border p-1 text-sm">
            <span className="select-none group-active:translate-y-0.5">
              delete
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-22 items-end justify-start rounded-md border p-1 text-sm">
            <span className="select-none group-active:translate-y-0.5">
              tab
            </span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">Q</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">W</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">E</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">R</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">T</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">Y</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">U</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">I</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">O</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <span className="select-none group-active:translate-y-0.5">P</span>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">{'{'}</span>
              <span className="leading-[1] select-none">{'['}</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">{'}'}</span>
              <span className="leading-[1] select-none">{']'}</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
            <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
              <span className="leading-[1] select-none">|</span>
              <span className="leading-[1] select-none">\</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-full items-start justify-between rounded-md border p-1 text-sm">
            <div className="flex h-full flex-col justify-between group-active:translate-y-0.5">
              <span className="bg-clickable block size-1 rounded-full"></span>
              <span className="select-none">caps lock</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                A
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                S
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                D
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                F
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                G
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                H
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                J
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                K
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                L
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
                <span className="leading-[1] select-none">:</span>
                <span className="leading-[1] select-none">;</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
                <span className="leading-[1] select-none">"</span>
                <span className="leading-[1] select-none">'</span>
              </div>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-full items-end justify-end rounded-md border p-1 text-sm">
            <span className="select-none group-active:translate-y-0.5">
              return
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-full items-end justify-start rounded-md border p-1 text-sm">
            <span className="select-none group-active:translate-y-0.5">
              shift
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                Z
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                X
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                C
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                V
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                B
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                N
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                M
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
                <span className="leading-[1] select-none">{'<'}</span>
                <span className="leading-[1] select-none">,</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
                <span className="leading-[1] select-none">{'>'}</span>
                <span className="leading-[1] select-none">.</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-center justify-center rounded-md border">
              <div className="flex flex-col items-center justify-center group-active:translate-y-0.5">
                <span className="leading-[1] select-none">{'?'}</span>
                <span className="leading-[1] select-none">/</span>
              </div>
            </div>
          </div>
          <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-full items-end justify-end rounded-md border p-1 text-sm">
            <span className="select-none group-active:translate-y-0.5">
              shift
            </span>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <div className="flex items-center gap-2">
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 items-end justify-start rounded-md border p-1 text-sm">
              <span className="select-none group-active:translate-y-0.5">
                fn
              </span>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-max items-end justify-start rounded-md border p-1">
              <div className="flex h-full flex-col items-end justify-between group-active:translate-y-0.5">
                <span className="text-sm leading-[1] select-none">^</span>
                <span className="text-sm select-none">control</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-max items-end justify-start rounded-md border p-1">
              <div className="flex h-full flex-col items-end justify-between group-active:translate-y-0.5">
                <span className="text-sm leading-[1] select-none">⌥</span>
                <span className="text-sm select-none">option</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-max items-end justify-start rounded-md border p-1">
              <div className="flex h-full flex-col items-end justify-between group-active:translate-y-0.5">
                <span className="text-xs leading-[1] select-none">⌘</span>
                <span className="text-sm select-none">command</span>
              </div>
            </div>
          </div>
          <div className="border-clickable/30 bg-clickable/5 hover:bg-clickable/20 active:bg-clickable/30 size-11 w-full rounded-md border"></div>
          <div className="flex items-end gap-2">
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-max items-end justify-start rounded-md border p-1">
              <div className="flex h-full flex-col items-start justify-between group-active:translate-y-0.5">
                <span className="text-xs leading-[1] select-none">⌘</span>
                <span className="text-sm select-none">command</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex size-11 w-max items-end justify-start rounded-md border p-1">
              <div className="flex h-full flex-col items-start justify-between group-active:translate-y-0.5">
                <span className="text-sm leading-[1] select-none">⌥</span>
                <span className="text-sm select-none">option</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex h-4.5 w-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                <KeyboardArrowIcon className="size-2.5 rotate-180" />
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex h-5 w-11 items-center justify-center rounded-md border">
                <span className="select-none group-active:translate-y-0.5">
                  <KeyboardArrowIcon className="size-2.5 -rotate-90" />
                </span>
              </div>
              <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex h-5 w-11 items-center justify-center rounded-md border">
                <span className="select-none group-active:translate-y-0.5">
                  <KeyboardArrowIcon className="size-2.5 rotate-90" />
                </span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-clickable/5 text-clickable hover:bg-clickable/20 active:bg-clickable/30 flex h-4.5 w-11 items-center justify-center rounded-md border">
              <span className="select-none group-active:translate-y-0.5">
                <KeyboardArrowIcon className="size-2.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

# JQuery
## Events
- Event on DOM
    - [Focus](jq-focus.html)
        - ![](../../../-/2.png) `.focusin()`
            - ![](../../../-/2.png) `.focus()`
                > _Event or Trigger_
        - ![](../../../-/2.png) `.focusout()`
            - ![](../../../-/2.png) `.blur()`
                > _Event or Trigger_
    - Click
        - ![](../../../-/1.png) [`.click()`](jq-click.html)
        - ![](../../../-/1.png) [`.dblclick()`](jq-click.html)
    - Form
        - ![](../../../-/2.png) [`.submit()`](jq-form.html)
    - Bind
        - ![](../../../-/1.png) [`.on("event",()=>{})`](jq-bind-on.html)
            > To set event on element
        - ![](../../../-/1.png) [`.off("event")`](jq-bind-off.html)
            > To remove and turn off one event
            - ![](../../../-/2.png) `.off()`
                > _To remove all events_
        - ![](../../../-/2.png) [`.one()`](jq-bind-one.html)
            > One time event
        - ![](../../../-/x.png) ~~`.bind()`~~
        - ![](../../../-/x.png) ~~`.unbind()`~~
    - Edit
        - ![](../../../-/1.png) [`.on("input",(e) => {})`](jq-edit.html)
        - ![](../../../-/2.png) [`.change()`](jq-edit.html)
        - ![](../../../-/2.png) [`.select()`](jq-edit.html)
    - Keyboard
        > All events related to keyboard
        - ![](../../../-/1.png) [`.keydown()`](jq-keyboard.html)
        - ![](../../../-/1.png) [`.keyup()`](jq-keyboard.html)
        - ![](../../../-/1.png) [`.keypress()`](jq-keyboard.html)
    - Mouse
        > All events related to mouse
        - ![](../../../-/2.png) [`.mouseleave()`](jq-mouse.html)
        - ![](../../../-/1.png) [`.mousedown()`](jq-mouse.html)
        - ![](../../../-/2.png) [`.mouseenter()`](jq-mouse.html)
        - ![](../../../-/1.png) [`.mousemove()`](jq-mouse.html)
        - ![](../../../-/2.png) [`.mouseout()`](jq-mouse.html)
        - ![](../../../-/2.png) [`.mouseover()`](jq-mouse.html)
        - ![](../../../-/1.png) [`.mouseup()`](jq-mouse.html)
        - ![](../../../-/2.png) [`.hover()`](jq-hover.html)
    - Window
        - ![](../../../-/1.png) [`$(window).resize()`](jq-resize.html)
            - ![](../../../-/2.png) [`$(window).width()`](jq-resize.html)
            - ![](../../../-/2.png) [`$(window).height()`](jq-resize.html)
    - Other
        - ![](../../../-/2.png) [`.scroll()`](jq-scroll.html)
        - ![](../../../-/1.png) [`.ready()`](jq-ready.html)
        - ![](../../../-/2.png) [`.trigger()`](jq-trigger.html) 
            > _To invoke an event manually_
            - ![](../../../-/2.png) [`.triggerHandler()`](jq-trigger-handler.html)
                > _Same as trigger without bubbling the DOM; Works on the first element_
            - ![](../../../-/2.png) [Trigger keyboard keys manually](jq-trigger-keyboard-key.html)
- Event Object
    - Methods
        - ![](../../../-/2.png) [`e.preventDefault()`](jq-prevent-default.html)
            - `e.isDefaultPrevented()`
        - ![](../../../-/3.png) [`e.stopPropagation()`](jq-stop-propagation.html)
            > _Stop bubbling up the same event_
            - ![](../../../-/3.png) `e.isPropagationStopped()`
        - ![](../../../-/4.png) [`e.stopImmediatePropagation()`](jq-stop-immediate-propagation.html)
            > _Like `e.stopPropagation()` but disables all other scopes of the same event_
            - ![](../../../-/4.png) `e.isImmediatePropagationStopped()`
    - Properties
        - Target
            > The element that fired the event
            - ![](../../../-/1.png) [`e.target`](jq-edit.html)
            - ![](../../../-/3.png) [`e.relatedTarget`](jq-related-target.html)
            - ![](../../../-/2.png) [`e.currentTarget`](jq-target.html)
            - ![](../../../-/3.png) [`e.delegateTarget`](jq-target.html)
        - ![](../../../-/1.png) [Position](jq-mouse.html)
            - `e.pageX`
            - `e.pageY`
        - Other
            - ![](../../../-/4.png) [`e.result`](jq-result.html)
            - ![](../../../-/3.png) [`e.data`](jq-data.html)
            - ![](../../../-/3.png) [`e.metaKey`](jq-keyboard.html)
                > _`true` if `window` key is down_
            - ![](../../../-/3.png) [`e.timeStamp`](jq-timestamp.html)
            - ![](../../../-/2.png) [`e.type`](jq-type.html)
                > _Type of event_
            - ![](../../../-/1.png) [`e.key`](jq-keyboard.html)
                > _Keyboard key symbol_
            - ![](../../../-/2.png) [`e.which`](jq-keyboard.html)
                > _Keyboard key code_
- Deprecated
    - ![](../../../-/x.png) ~~`.live()`~~
    - ![](../../../-/x.png) ~~`.die()`~~
    - ![](../../../-/x.png) ~~`.load()`~~
    - ![](../../../-/x.png) ~~`.unload()`~~
    - ![](../../../-/x.png) ~~`.delegate()`,~~
    - ![](../../../-/x.png) ~~`.undelegate()`~~
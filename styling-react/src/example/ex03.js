// 9.2.1 utils 함수 분리하기
/**
 * utils.scss
 */
// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;

// 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용할 수 있음)
@mixin square($size) {
    $calculated: 32px * $size;
    width: $calulated;
    height: $calculated;
}

/**
 * SassComponent.scss
 */
@import './styles/utils';
.SassComponent {
    display: flex;
    .box { // 일반 CSS에서는 .SassComponent .box와 마찬가지
        background: red;
        cursor: pointer;
        transition: all 0.3s ease-in;
        &.red {
            // .red 클래스가 .box와 함께 사용되었을 때
            background: $red;
            @include square(1);
        }
        &.orange {
            background: $orange;
            @include square(2);
        }
        &.yellow {
            background: $yellow;
            @include square(3);
        }
        &.green {
            background: $green;
            @include square(4);
        }
        &.blue {
            background: $blue;
            @include square(5);
        }
        &.indigo {
            background: $indigo;
            @include square(6);
        }
        &.violet {
            background: $violet;
            @include square(7);
        }
        &.hover {
            // .box에 마우스를 올렸을 때
            background: black;
        }
    }
}
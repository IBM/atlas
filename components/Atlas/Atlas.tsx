import React from "react";
import Link from "next/link";
import styles from "./Atlas.module.scss";
import ReactTooltip from "react-tooltip";
import cx from "classnames";

// Using any on the style props allows for css custom properties to be used
const Atlas = ({ technologies }: any) => {
  React.useEffect(() => {
    ReactTooltip.rebuild();
  }, [technologies]);

  return (
    <div className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 800.709 647.402"
      >
        <defs>
          <linearGradient
            id="linear-gradient-1"
            x1="479.947"
            x2="696.144"
            y1="419.251"
            y2="509.543"
            gradientTransform="matrix(1 0 0 -1 0 715.192)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#a8a8a8" stopOpacity=".35" />
            <stop offset="1" stopColor="#a8a8a8" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="478.762"
            x2="697.368"
            y1="361.265"
            y2="270.721"
            gradientTransform="matrix(1 0 0 -1 0 715.192)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#be95ff" stopOpacity=".35" />
            <stop offset="1" stopColor="#be95ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="440.198"
            x2="528.618"
            y1="314.904"
            y2="100.379"
            gradientTransform="matrix(1 0 0 -1 0 715.192)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#08bdba" stopOpacity=".35" />
            <stop offset="1" stopColor="#0eb7bd" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1="288.812"
            x2="377.65"
            y1="101.373"
            y2="314.855"
            gradientTransform="matrix(1 0 0 -1 0 715.192)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8541fc" stopOpacity="0" />
            <stop offset="1" stopColor="#8a3ffc" stopOpacity=".35" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-5"
            x1="118.319"
            x2="336.438"
            y1="270.146"
            y2="360.387"
            gradientTransform="matrix(1 0 0 -1 0 715.192)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1366fe" stopOpacity="0" />
            <stop offset="1" stopColor="#0f62fe" stopOpacity=".35" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-6"
            x1="118.544"
            x2="334.498"
            y1="510.4"
            y2="421.744"
            gradientTransform="matrix(1 0 0 -1 0 715.192)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#82cfff" stopOpacity="0" />
            <stop offset="1" stopColor="#82cfff" stopOpacity=".35" />
          </linearGradient>
        </defs>
        <g className={styles.base} id="base">
          <g
            id="rings"
            fill="none"
            stroke="#c1c7cd"
            strokeMiterlimit="10"
            strokeWidth=".75"
          >
            <circle cx="408.55" cy="324.839" r="75" />
            <circle cx="408.55" cy="324.839" r="275" />
            <circle cx="408.55" cy="324.839" r="315" />
            <circle cx="408.55" cy="324.839" r="235" />
            <circle cx="408.55" cy="324.839" r="195" />
            <circle cx="408.55" cy="324.839" r="155" />
            <circle cx="408.55" cy="324.839" r="115" />
          </g>
          <g className={styles.years}>
            <g>
              <path
                fill="#fff"
                d="M434.55 254.696c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <path
                fill="none"
                stroke="#c1c7cd"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M434.55 254.696c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <text
                fill="#121619"
                fontFamily="IBMPlexSans-Medium, 'IBM Plex Sans'"
                fontSize="14"
                fontWeight="500"
                transform="translate(392.624 259.564)"
              >
                <tspan x="0" y="0">
                  2023
                </tspan>
              </text>
            </g>
            <g>
              <path
                fill="#fff"
                d="M434.55 212.87c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <path
                fill="none"
                stroke="#c1c7cd"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M434.55 212.87c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <text
                fill="#121619"
                fontFamily="IBMPlexSans-Medium, 'IBM Plex Sans'"
                fontSize="14"
                fontWeight="500"
                transform="translate(392.624 218.755)"
              >
                <tspan x="0" y="0">
                  2024
                </tspan>
              </text>
            </g>
            <g>
              <path
                fill="#fff"
                d="M434.55 172.193c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <path
                fill="none"
                stroke="#c1c7cd"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M434.55 172.193c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <text
                fill="#121619"
                fontFamily="IBMPlexSans-Medium, 'IBM Plex Sans'"
                fontSize="14"
                fontWeight="500"
                transform="translate(392.624 177.286)"
              >
                <tspan x="0" y="0">
                  2025
                </tspan>
              </text>
            </g>
            <g>
              <path
                fill="#fff"
                d="M434.55 131.816c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <path
                fill="none"
                stroke="#c1c7cd"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M434.55 131.816c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <text
                fill="#121619"
                fontFamily="IBMPlexSans-Medium, 'IBM Plex Sans'"
                fontSize="14"
                fontWeight="500"
                transform="translate(392.624 136.827)"
              >
                <tspan x="0" y="0">
                  2027
                </tspan>
              </text>
            </g>
            <g>
              <path
                fill="#fff"
                d="M434.55 91.375c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <path
                fill="none"
                stroke="#c1c7cd"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M434.55 91.375c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <text
                fill="#121619"
                fontFamily="IBMPlexSans-Medium, 'IBM Plex Sans'"
                fontSize="14"
                fontWeight="500"
                transform="translate(392.624 96.306)"
              >
                <tspan x="0" y="0">
                  2029
                </tspan>
              </text>
            </g>
            <g>
              <path
                fill="#fff"
                d="M434.55 51.21c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <path
                fill="none"
                stroke="#c1c7cd"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M434.55 51.21c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <text
                fill="#121619"
                fontFamily="IBMPlexSans-Medium, 'IBM Plex Sans'"
                fontSize="14"
                fontWeight="500"
                transform="translate(392.624 56.078)"
              >
                <tspan x="0" y="0">
                  2030
                </tspan>
              </text>
            </g>
            <g>
              <path
                fill="#fff"
                d="M434.55 11.495c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <path
                fill="none"
                stroke="#c1c7cd"
                strokeMiterlimit="10"
                strokeWidth=".75"
                d="M434.55 11.495c0 6.116-5.4 11.12-12 11.12h-28c-6.6 0-12-5.004-12-11.12s5.4-11.12 12-11.12h28c6.6 0 12 5.004 12 11.12Z"
              />
              <text
                fill="#121619"
                fontFamily="IBMPlexSans-Medium, 'IBM Plex Sans'"
                fontSize="14"
                fontWeight="500"
                transform="translate(403.332 14.65)"
              >
                <tspan x="0" y="0">
                  ...
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g className={styles.technology} id="security">
          <Link href="/security/2025">
            <path
              id="security_2025"
              data-tip="Security|2025"
              data-for="segment"
              className={styles.segment}
              fill="#ada8a8"
              d="M586.324 244.589a194.322 194.322 0 0 0-13.495-24.853 195.813 195.813 0 0 0-26.394-32.783l-28.284 28.284c28.049 28.049 45.398 66.799 45.398 109.602h40c0-18.51-2.579-36.418-7.397-53.384a193.646 193.646 0 0 0-9.828-26.866Z"
              style={{ "--opacity": 0.25 } as any}
              data-opacity={0.25}
            />
          </Link>
          <Link href="/security/2029">
            <path
              id="security_2029"
              data-tip="Security|2029"
              data-for="segment"
              className={styles.segment}
              fill="#ada8a8"
              d="M647.115 187.956a275.934 275.934 0 0 0-44.112-57.572l-28.284 28.284a236.377 236.377 0 0 1 18.707 21.084c31.396 39.952 50.122 90.332 50.122 145.086h40c0-45.089-10.851-87.643-30.085-125.194a275.796 275.796 0 0 0-6.349-11.689Z"
              style={{ "--opacity": 0.15 } as any}
              data-opacity={0.15}
            />
          </Link>
          <Link href="/security/2024">
            <path
              id="security_2024"
              data-tip="Security|2024"
              data-for="segment"
              className={styles.segment}
              fill="#ada8a8"
              d="m518.151 215.237-28.284 28.284a115.416 115.416 0 0 1 21.102 28.963 114.441 114.441 0 0 1 7.411 18.156c3.36 10.803 5.17 22.289 5.17 34.198h40c0-42.802-17.349-81.552-45.398-109.602h-.001Z"
              style={{ "--opacity": 0.3 } as any}
              data-opacity={0.3}
            />
          </Link>
          <Link href="/security/2030">
            <path
              id="security_2030"
              data-tip="Security|2030"
              data-for="segment"
              className={styles.segment}
              fill="#ada8a8"
              d="M603.004 130.385a275.9 275.9 0 0 1 44.112 57.572 272.945 272.945 0 0 1 6.349 11.689c19.234 37.551 30.085 80.105 30.085 125.194h40c0-16.31-1.24-32.33-3.63-47.971a313.432 313.432 0 0 0-8.32-38.264 312.306 312.306 0 0 0-9.9-29.268 313.699 313.699 0 0 0-16.169-34.645 315.114 315.114 0 0 0-20.097-32.202 316.725 316.725 0 0 0-34.145-40.389l-28.284 28.284Z"
              style={{ "--opacity": 0.1 } as any}
              data-opacity={0.1}
            />
          </Link>
          <Link href="/security/2027">
            <path
              id="security_2027"
              data-tip="Security|2027"
              data-for="segment"
              className={styles.segment}
              fill="#ada8a8"
              d="M593.427 179.753a236.675 236.675 0 0 0-18.707-21.084l-28.284 28.284a195.91 195.91 0 0 1 26.394 32.783 194.39 194.39 0 0 1 13.495 24.853 193.6 193.6 0 0 1 9.828 26.866c4.818 16.966 7.397 34.873 7.397 53.384h40c0-54.754-18.726-105.134-50.122-145.086Z"
              style={{ "--opacity": 0.2 } as any}
              data-opacity={0.2}
            />
          </Link>
          <Link href="/security/2023">
            <path
              id="security_2023"
              data-tip="Security|2023"
              data-for="segment"
              className={styles.segment}
              fill="#ada8a8"
              d="M516.571 285.298a114.126 114.126 0 0 0-6.902-15.275 115.42 115.42 0 0 0-19.803-26.501l-28.284 28.284c9.331 9.331 16.215 21.109 19.606 34.289a75.105 75.105 0 0 1 2.361 18.744h40c0-11.909-1.81-23.395-5.17-34.198-.56-1.8-1.163-3.582-1.808-5.343Z"
              style={{ "--opacity": 0.35 } as any}
              data-opacity={0.35}
            />
          </Link>
          <Link href="/security" data-tip="Security" data-for="label">
            <text id="security_label" transform="translate(718.398 202.988)">
              <tspan x="0" y="0">
                Security
              </tspan>
            </text>
          </Link>
          <path
            id="security_full"
            className={styles.full}
            fill="url(#linear-gradient-1)"
            d="M461.583 271.806c13.572 13.572 21.967 32.322 21.967 53.033h240c0-86.985-35.258-165.735-92.261-222.739L461.583 271.806Z"
          />
          <g id="security_nodes" className={styles.nodes}>
            <path
              fill="none"
              stroke="#c1c7cd"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m477.485 296.66 222.294-92.077"
            />
            <path
              fill="#121619"
              d="m586.324 249.428 3.694-1.536 1.535 3.694-3.694 1.535-1.535-3.693Zm73.883-30.602 3.693-1.536 1.536 3.694-3.694 1.535-1.535-3.693ZM549.29 264.784l3.693-1.535 1.535 3.694-3.693 1.535-1.535-3.694Zm-36.976 15.299 3.694-1.535 1.535 3.694-3.693 1.535-1.536-3.694Zm110.901-45.935 3.694-1.535 1.535 3.694-3.693 1.535-1.536-3.694Zm-147.902 61.326 3.694-1.535 1.535 3.693-3.694 1.535-1.535-3.693Z"
            />
          </g>
          <g
            id="security_nodes_hover"
            className={cx(styles.nodes, styles.hoverNodes)}
          >
            <path
              fill="#ada8a8"
              d="m586.324 249.428 3.694-1.536 1.535 3.694-3.694 1.535-1.535-3.693Zm73.883-30.602 3.693-1.536 1.536 3.694-3.694 1.535-1.535-3.693ZM549.29 264.784l3.693-1.535 1.535 3.694-3.693 1.535-1.535-3.694Zm-36.976 15.299 3.694-1.535 1.535 3.694-3.693 1.535-1.536-3.694Zm110.901-45.935 3.694-1.535 1.535 3.694-3.693 1.535-1.536-3.694Zm-147.902 61.326 3.694-1.535 1.535 3.693-3.694 1.535-1.535-3.693Z"
            />
            <path
              fill="none"
              stroke="#ada8a8"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m477.485 296.66 222.294-92.077"
            />
          </g>
        </g>
        <g className={styles.technology} id="quantum">
          <Link href="/quantum/2025">
            <path
              id="quantum_2025"
              data-tip="Quantum|2025"
              data-for="segment"
              className={styles.segment}
              fill="#be95ff"
              d="M559.021 448.877a195.91 195.91 0 0 0 13.808-18.935 194.39 194.39 0 0 0 13.495-24.853 193.6 193.6 0 0 0 9.828-26.866c4.818-16.966 7.397-34.873 7.397-53.384h-40c0 42.802-17.349 81.552-45.398 109.602l28.284 28.284a196.487 196.487 0 0 0 12.586-13.847Z"
              style={{ "--opacity": 0.25 } as any}
              data-opacity={0.25}
            />
          </Link>
          <Link href="/quantum/2029">
            <path
              id="quantum_2029"
              data-tip="Quantum|2029"
              data-for="segment"
              className={styles.segment}
              fill="#be95ff"
              d="M647.115 461.722a272.945 272.945 0 0 0 6.349-11.689c19.234-37.551 30.085-80.105 30.085-125.194h-40c0 54.754-18.726 105.134-50.122 145.086a236.675 236.675 0 0 1-18.707 21.084l28.284 28.284a275.9 275.9 0 0 0 44.112-57.572h-.001Z"
              style={{ "--opacity": 0.15 } as any}
              data-opacity={0.15}
            />
          </Link>
          <Link href="/quantum/2024">
            <path
              id="quantum_2024"
              data-tip="Quantum|2024"
              data-for="segment"
              className={styles.segment}
              fill="#be95ff"
              d="M563.55 324.839h-40c0 11.909-1.81 23.395-5.17 34.198a113.99 113.99 0 0 1-7.411 18.156 115.57 115.57 0 0 1-4.068 7.278 115.44 115.44 0 0 1-17.034 21.685l28.284 28.284c28.049-28.049 45.398-66.799 45.398-109.602h.001Z"
              style={{ "--opacity": 0.3 } as any}
              data-opacity={0.3}
            />
          </Link>
          <Link href="/quantum/2030">
            <path
              id="quantum_2030"
              data-tip="Quantum|2030"
              data-for="segment"
              className={styles.segment}
              fill="#be95ff"
              d="M683.55 324.839c0 45.089-10.851 87.643-30.085 125.194a275.796 275.796 0 0 1-6.349 11.689 275.934 275.934 0 0 1-44.112 57.572l28.284 28.284a316.995 316.995 0 0 0 25.076-28.262 315.945 315.945 0 0 0 25.452-37.683 313.354 313.354 0 0 0 16.979-34.181c15.94-37.686 24.754-79.12 24.754-122.612H683.55Z"
              style={{ "--opacity": 0.1 } as any}
              data-opacity={0.1}
            />
          </Link>
          <Link href="/quantum/2027">
            <path
              id="quantum_2027"
              data-tip="Quantum|2027"
              data-for="segment"
              className={styles.segment}
              fill="#be95ff"
              d="M589.887 474.321a241.11 241.11 0 0 0 3.54-4.396c31.396-39.952 50.122-90.332 50.122-145.086h-40c0 18.51-2.579 36.418-7.397 53.384a193.646 193.646 0 0 1-9.828 26.866 194.322 194.322 0 0 1-13.495 24.853 195.816 195.816 0 0 1-26.394 32.782l28.284 28.284a236.282 236.282 0 0 0 15.167-16.688Z"
              style={{ "--opacity": 0.2 } as any}
              data-opacity={0.2}
            />
          </Link>
          <Link href="/quantum/2023">
            <path
              id="quantum_2023"
              data-tip="Quantum|2023"
              data-for="segment"
              className={styles.segment}
              fill="#be95ff"
              d="M506.901 384.471a114.441 114.441 0 0 0 11.479-25.434c3.36-10.803 5.17-22.289 5.17-34.198h-40c0 11.65-2.656 22.679-7.396 32.516a74.89 74.89 0 0 1-5.413 9.418 75.382 75.382 0 0 1-9.158 11.1l28.284 28.284a115.44 115.44 0 0 0 17.034-21.685Z"
              style={{ "--opacity": 0.35 } as any}
              data-opacity={0.35}
            />
          </Link>
          <Link href="/quantum" data-tip="Quantum" data-for="label">
            <text id="quantum_label" transform="translate(717.31 459.988)">
              <tspan x="0" y="0">
                Quantum
              </tspan>
            </text>
          </Link>
          <path
            id="quantum_full"
            className={styles.full}
            fill="url(#linear-gradient-2)"
            d="M483.55 324.839c0 20.711-8.395 39.461-21.967 53.033l169.706 169.706c57.004-57.004 92.261-135.754 92.261-222.739h-240Z"
          />
          <g id="quantum_nodes" className={styles.nodes}>
            <path
              fill="none"
              stroke="#c1c7cd"
              strokeMiterlimit="10"
              strokeWidth=".75"
              d="m699.533 445.685-221.787-91.867"
            />
            <path
              fill="#121619"
              d="m478.839 356.419-3.698-1.526 1.527-3.697 3.697 1.526-1.526 3.697Zm37.007 15.314-3.697-1.526 1.526-3.697 3.697 1.526-1.526 3.697Zm36.917 15.306-3.698-1.526 1.526-3.697 3.698 1.526-1.526 3.697Zm36.984 15.279-3.698-1.526 1.526-3.698 3.698 1.526-1.526 3.698Zm36.964 15.352-3.697-1.526 1.526-3.698 3.697 1.527-1.526 3.697Zm36.97 15.258-3.697-1.526 1.526-3.698 3.697 1.527-1.526 3.697Z"
            />
          </g>
          <g
            id="quantum_nodes_hover"
            className={cx(styles.nodes, styles.hoverNodes)}
          >
            <path
              fill="#be95ff"
              d="m478.839 356.419-3.698-1.526 1.527-3.697 3.697 1.526-1.526 3.697Zm37.007 15.314-3.697-1.526 1.526-3.697 3.697 1.526-1.526 3.697Zm36.917 15.306-3.698-1.526 1.526-3.697 3.698 1.526-1.526 3.697Zm36.984 15.279-3.698-1.526 1.526-3.698 3.698 1.526-1.526 3.698Zm36.964 15.352-3.697-1.526 1.526-3.698 3.697 1.527-1.526 3.697Zm36.97 15.258-3.697-1.526 1.526-3.698 3.697 1.527-1.526 3.697Z"
            />
            <path
              fill="none"
              stroke="#be95ff"
              strokeMiterlimit="10"
              strokeWidth=".75"
              d="m699.533 445.685-221.787-91.867"
            />
          </g>
        </g>
        <g className={styles.technology} id="hybrid_cloud">
          <Link href="/hybrid-cloud/2025">
            <path
              id="hybrid_cloud_2025"
              data-tip="Hybrid Cloud|2025"
              data-for="segment"
              className={styles.segment}
              fill="#08bdba"
              d="M471.092 509.593a194.32 194.32 0 0 0 42.561-20.475 196.179 196.179 0 0 0 32.782-26.394l-28.284-28.284c-28.05 28.049-66.8 45.398-109.602 45.398v40c13.462 0 26.605-1.364 39.299-3.962a193.493 193.493 0 0 0 23.243-6.284h.001Z"
              style={{ "--opacity": 0.25 } as any}
              data-opacity={0.25}
            />
          </Link>
          <Link href="/hybrid-cloud/2029">
            <path
              id="hybrid_cloud_2029"
              data-tip="Hybrid Cloud|2029"
              data-for="segment"
              className={styles.segment}
              fill="#08bdba"
              d="M450.429 596.67a273.94 273.94 0 0 0 33.405-7.263 273.378 273.378 0 0 0 49.91-19.653 274.418 274.418 0 0 0 28.561-16.881 276.71 276.71 0 0 0 40.7-33.579l-28.284-28.284a237.812 237.812 0 0 1-8.161 7.781 234.893 234.893 0 0 1-12.923 10.926 234.857 234.857 0 0 1-58.917 33.822c-26.681 10.521-55.75 16.3-86.168 16.3v40c9.492 0 18.872-.481 28.117-1.42 4.602-.467 9.191-1.05 13.763-1.749h-.003Z"
              style={{ "--opacity": 0.15 } as any}
              data-opacity={0.15}
            />
          </Link>
          <Link href="/hybrid-cloud/2024">
            <path
              id="hybrid_cloud_2024"
              data-tip="Hybrid Cloud|2024"
              data-for="segment"
              className={styles.segment}
              fill="#08bdba"
              d="M489.867 406.156a115.15 115.15 0 0 1-33.991 23.524 113.87 113.87 0 0 1-18.587 6.538 114.48 114.48 0 0 1-19.893 3.285c-2.92.222-5.871.335-8.848.335v40c42.802 0 81.552-17.349 109.602-45.398l-28.284-28.284Z"
              style={{ "--opacity": 0.3 } as any}
              data-opacity={0.3}
            />
          </Link>
          <Link href="/hybrid-cloud/2030">
            <path
              id="hybrid_cloud_2030"
              data-tip="Hybrid Cloud|2030"
              data-for="segment"
              className={styles.segment}
              fill="#08bdba"
              d="M603.004 519.293a276.306 276.306 0 0 1-46.233 37.221 274.604 274.604 0 0 1-23.028 13.239 273.234 273.234 0 0 1-49.91 19.653 273.525 273.525 0 0 1-33.405 7.263c-4.552.695-9.14 1.279-13.763 1.749a277.923 277.923 0 0 1-28.117 1.42v40c16.31 0 32.33-1.24 47.971-3.63a313.147 313.147 0 0 0 53.058-12.922 312.14 312.14 0 0 0 28.605-11.276 314.127 314.127 0 0 0 40.148-21.8 316.316 316.316 0 0 0 52.957-42.636l-28.284-28.284v.003Z"
              style={{ "--opacity": 0.1 } as any}
              data-opacity={0.1}
            />
          </Link>
          <Link href="/hybrid-cloud/2027">
            <path
              id="hybrid_cloud_2027"
              data-tip="Hybrid Cloud|2027"
              data-for="segment"
              className={styles.segment}
              fill="#08bdba"
              d="M494.718 543.538a234.825 234.825 0 0 0 63.313-37.362 236.04 236.04 0 0 0 16.688-15.167l-28.284-28.284a195.976 195.976 0 0 1-32.782 26.394 194.433 194.433 0 0 1-42.561 20.475 193.73 193.73 0 0 1-23.243 6.284 195.824 195.824 0 0 1-39.299 3.962v40c30.419 0 59.488-5.779 86.168-16.3v-.002Z"
              style={{ "--opacity": 0.2 } as any}
              data-opacity={0.2}
            />
          </Link>
          <Link href="/hybrid-cloud/2023">
            <path
              id="hybrid_cloud_2023"
              data-tip="Hybrid Cloud|2023"
              data-for="segment"
              className={styles.segment}
              fill="#08bdba"
              d="M423.196 438.915a114.167 114.167 0 0 0 37.708-11.656 114.69 114.69 0 0 0 11.944-7.059 115.538 115.538 0 0 0 17.02-14.043l-28.284-28.284c-9.331 9.331-21.109 16.215-34.289 19.606a75.151 75.151 0 0 1-18.744 2.361v40c2.977 0 5.928-.113 8.848-.335 1.947-.148 3.88-.345 5.799-.589h-.002Z"
              style={{ "--opacity": 0.35 } as any}
              data-opacity={0.35}
            />
          </Link>
          <Link href="/hybrid_cloud" data-tip="Hybrid Cloud" data-for="label">
            <text
              id="hybrid_cloud_label"
              transform="translate(538.892 642.501)"
            >
              <tspan x="0" y="0">
                Hybrid Cloud
              </tspan>
            </text>
          </Link>
          <path
            id="hybrid_cloud_full"
            className={styles.full}
            fill="url(#linear-gradient-3)"
            d="M408.55 399.839v240c86.985 0 165.735-35.258 222.739-92.261L461.583 377.872c-13.572 13.572-32.322 21.967-53.033 21.967Z"
          />
          <g id="hybrid_cloud_nodes" className={styles.nodes}>
            <path
              fill="none"
              stroke="#c1c7cd"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m529.027 615.975-91.883-221.826"
            />
            <path
              fill="#121619"
              d="m436.101 396.797-1.535-3.693 3.693-1.535 1.536 3.693-3.694 1.535Zm15.314 36.996-1.535-3.694 3.693-1.535 1.536 3.693-3.694 1.536Zm15.307 36.955-1.536-3.694 3.694-1.535 1.535 3.693-3.693 1.536Zm15.296 36.928-1.535-3.693 3.694-1.536 1.535 3.694-3.694 1.535Zm15.315 36.973-1.535-3.693 3.693-1.536 1.536 3.694-3.694 1.535Zm15.345 36.97-1.536-3.693 3.694-1.536 1.535 3.694-3.693 1.535Z"
            />
          </g>
          <g
            id="hybrid_cloud_nodes_hover"
            className={cx(styles.nodes, styles.hoverNodes)}
          >
            <path
              fill="#08bdba"
              d="m436.101 396.797-1.535-3.693 3.693-1.535 1.536 3.693-3.694 1.535Zm15.314 36.996-1.535-3.694 3.693-1.535 1.536 3.693-3.694 1.536Zm15.307 36.955-1.536-3.694 3.694-1.535 1.535 3.693-3.693 1.536Zm15.296 36.928-1.535-3.693 3.694-1.536 1.535 3.694-3.694 1.535Zm15.315 36.973-1.535-3.693 3.693-1.536 1.536 3.694-3.694 1.535Zm15.345 36.97-1.536-3.693 3.694-1.536 1.535 3.694-3.693 1.535Z"
            />
            <path
              fill="none"
              stroke="#08bdba"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m529.027 615.975-91.883-221.826"
            />
          </g>
        </g>
        <g className={styles.technology} id="data">
          <Link href="/data/2025">
            <path
              id="data_2025"
              data-tip="Data|2025"
              data-for="segment"
              className={styles.segment}
              fill="#8a3ffc"
              d="M280.937 472.288c22.407 19.41 49.284 33.798 78.879 41.412a194.171 194.171 0 0 0 28.796 5.132 197.269 197.269 0 0 0 19.938 1.007v-40c-42.802 0-81.552-17.349-109.601-45.398l-28.284 28.284a197.522 197.522 0 0 0 10.273 9.563Z"
              style={{ "--opacity": 0.25 } as any}
              data-opacity={0.25}
            />
          </Link>
          <Link href="/data/2029">
            <path
              id="data_2029"
              data-tip="Data|2029"
              data-for="segment"
              className={styles.segment}
              fill="#8a3ffc"
              d="M265.952 560.026a274.902 274.902 0 0 0 17.403 9.728 273.306 273.306 0 0 0 49.91 19.653 273.341 273.341 0 0 0 33.405 7.264c4.552.695 9.14 1.279 13.763 1.749 9.245.939 18.625 1.42 28.117 1.42v-40c-8.112 0-16.127-.411-24.027-1.213a234.405 234.405 0 0 1-34.702-6.185 233.026 233.026 0 0 1-32.742-11.069 234.711 234.711 0 0 1-49.132-28.219 235.908 235.908 0 0 1-25.566-22.143l-28.284 28.284a276.524 276.524 0 0 0 35.26 29.81 275.43 275.43 0 0 0 16.596 10.923v-.002Z"
              style={{ "--opacity": 0.15 } as any}
              data-opacity={0.15}
            />
          </Link>
          <Link href="/data/2024">
            <path
              id="data_2024"
              data-tip="Data|2024"
              data-for="segment"
              className={styles.segment}
              fill="#8a3ffc"
              d="M408.55 479.839v-40c-5.954 0-11.803-.453-17.513-1.325a114.2 114.2 0 0 1-27.249-7.712 114.82 114.82 0 0 1-26.236-15.49 115.786 115.786 0 0 1-10.318-9.155l-28.284 28.284c28.049 28.049 66.799 45.398 109.601 45.398Z"
              style={{ "--opacity": 0.3 } as any}
              data-opacity={0.3}
            />
          </Link>
          <Link href="/data/2030">
            <path
              id="data_2030"
              data-tip="Data|2030"
              data-for="segment"
              className={styles.segment}
              fill="#8a3ffc"
              d="M408.55 599.839c-9.492 0-18.872-.481-28.117-1.42a274.189 274.189 0 0 1-47.168-9.013 273.264 273.264 0 0 1-55.797-22.759 275.076 275.076 0 0 1-28.112-17.545 276.374 276.374 0 0 1-35.26-29.81l-28.284 28.284c57.004 57.004 135.754 92.261 222.739 92.261v-39.998Z"
              style={{ "--opacity": 0.1 } as any}
              data-opacity={0.1}
            />
          </Link>
          <Link href="/data/2027">
            <path
              id="data_2027"
              data-tip="Data|2027"
              data-for="segment"
              className={styles.segment}
              fill="#8a3ffc"
              d="M250.541 498.79a235.303 235.303 0 0 0 17.405 14.362 234.72 234.72 0 0 0 54.436 30.386 233.175 233.175 0 0 0 33.096 10.283 234.21 234.21 0 0 0 29.044 4.804c7.9.802 15.916 1.213 24.027 1.213v-40c-6.731 0-13.382-.341-19.938-1.007a194.43 194.43 0 0 1-28.796-5.132c-29.595-7.615-56.472-22.002-78.879-41.412a194.615 194.615 0 0 1-10.273-9.563l-28.284 28.284a237.812 237.812 0 0 0 8.161 7.781h.001Z"
              style={{ "--opacity": 0.2 } as any}
              data-opacity={0.2}
            />
          </Link>
          <Link href="/data/2023">
            <path
              id="data_2023"
              data-tip="Data|2023"
              data-for="segment"
              className={styles.segment}
              fill="#8a3ffc"
              d="M337.55 415.311a114.877 114.877 0 0 0 26.236 15.49 114.205 114.205 0 0 0 27.249 7.712c5.71.873 11.559 1.325 17.513 1.325v-40c-20.711 0-39.461-8.395-53.033-21.967l-28.284 28.284a115.332 115.332 0 0 0 10.318 9.155h.001Z"
              style={{ "--opacity": 0.35 } as any}
              data-opacity={0.35}
            />
          </Link>
          <Link href="/data" data-tip="Data" data-for="label">
            <text id="data_label" transform="translate(235.339 642.501)">
              <tspan x="0" y="0">
                Data
              </tspan>
            </text>
          </Link>
          <path
            id="data_full"
            className={styles.full}
            fill="url(#linear-gradient-4)"
            d="M355.517 377.872 185.811 547.578c57.004 57.004 135.754 92.261 222.739 92.261v-240c-20.711 0-39.461-8.395-53.033-21.967Z"
          />
          <g id="data_nodes" className={styles.nodes}>
            <path
              fill="none"
              stroke="#c1c7cd"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m288.085 615.98 91.944-221.972"
            />
            <path
              fill="#121619"
              d="m377.355 395.279 1.526-3.698 3.697 1.527-1.526 3.697-3.697-1.526Zm-15.315 37.102 1.526-3.697 3.698 1.526-1.526 3.697-3.698-1.526Zm-15.306 36.815 1.526-3.697 3.697 1.526-1.526 3.698-3.697-1.527Zm-15.363 36.96 1.526-3.698 3.698 1.526-1.526 3.698-3.698-1.526Zm-15.255 36.957 1.527-3.697 3.697 1.526-1.526 3.698-3.698-1.527Zm-15.332 37.017 1.526-3.698 3.698 1.526-1.526 3.698-3.698-1.526Z"
            />
          </g>
          <g
            id="data_nodes_hover"
            className={cx(styles.nodes, styles.hoverNodes)}
          >
            <path
              fill="#8a3ffc"
              d="m377.355 395.279 1.526-3.698 3.697 1.527-1.526 3.697-3.697-1.526Zm-15.315 37.102 1.526-3.697 3.698 1.526-1.526 3.697-3.698-1.526Zm-15.306 36.815 1.526-3.697 3.697 1.526-1.526 3.698-3.697-1.527Zm-15.363 36.96 1.526-3.698 3.698 1.526-1.526 3.698-3.698-1.526Zm-15.255 36.957 1.527-3.697 3.697 1.526-1.526 3.698-3.698-1.527Zm-15.332 37.017 1.526-3.698 3.698 1.526-1.526 3.698-3.698-1.526Z"
            />
            <path
              fill="none"
              stroke="#8a3ffc"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m288.085 615.98 91.944-221.972"
            />
          </g>
        </g>
        <g className={styles.technology} id="automation">
          <Link href="/automation/2025">
            <path
              id="automation_2025"
              data-tip="Automation|2025"
              data-for="segment"
              className={styles.segment}
              fill="#0f62fe"
              d="M232.779 409.379a194.288 194.288 0 0 0 6.606 12.522 195.463 195.463 0 0 0 31.279 40.823l28.284-28.284c-28.05-28.049-45.398-66.799-45.398-109.602h-40c0 18.51 2.579 36.418 7.397 53.384 3.041 10.707 7 21.131 11.832 31.157Z"
              style={{ "--opacity": 0.25 } as any}
              data-opacity={0.25}
            />
          </Link>
          <Link href="/automation/2029">
            <path
              id="automation_2029"
              data-tip="Automation|2029"
              data-for="segment"
              className={styles.segment}
              fill="#0f62fe"
              d="M152.624 425.674a274.523 274.523 0 0 0 31.661 58.359 276.452 276.452 0 0 0 29.81 35.261l28.284-28.284a236.337 236.337 0 0 1-28.696-34.78 234.74 234.74 0 0 1-16.961-29.509 233.513 233.513 0 0 1-6.873-15.714c-10.521-26.681-16.3-55.75-16.3-86.169h-40c0 35.596 6.763 69.613 19.075 100.836Z"
              style={{ "--opacity": 0.15 } as any}
              data-opacity={0.15}
            />
          </Link>
          <Link href="/automation/2024">
            <path
              id="automation_2024"
              data-tip="Automation|2024"
              data-for="segment"
              className={styles.segment}
              fill="#0f62fe"
              d="M327.232 406.156a115.678 115.678 0 0 1-14.042-17.02c-12.4-18.354-19.64-40.48-19.64-64.298h-40c0 42.802 17.349 81.552 45.398 109.602l28.284-28.284Z"
              style={{ "--opacity": 0.3 } as any}
              data-opacity={0.3}
            />
          </Link>
          <Link href="/automation/2030">
            <path
              id="automation_2030"
              data-tip="Automation|2030"
              data-for="segment"
              className={styles.segment}
              fill="#0f62fe"
              d="M204.989 509.743a276.298 276.298 0 0 1-20.704-25.71 274.479 274.479 0 0 1-31.661-58.359c-12.312-31.222-19.075-65.239-19.075-100.836h-40c0 86.985 35.258 165.735 92.261 222.739l28.284-28.284a277.273 277.273 0 0 1-9.106-9.551Z"
              style={{ "--opacity": 0.1 } as any}
              data-opacity={0.1}
            />
          </Link>
          <Link href="/automation/2027">
            <path
              id="automation_2027"
              data-tip="Automation|2027"
              data-for="segment"
              className={styles.segment}
              fill="#0f62fe"
              d="M196.723 426.721a234.628 234.628 0 0 0 23.513 38.723 236.328 236.328 0 0 0 22.144 25.566l28.284-28.284a196.257 196.257 0 0 1-9.563-10.273 195.606 195.606 0 0 1-21.716-30.55 193.753 193.753 0 0 1-18.438-43.679c-4.818-16.966-7.397-34.873-7.397-53.384h-40c0 30.419 5.779 59.488 16.3 86.169a234.023 234.023 0 0 0 6.873 15.714v-.002Z"
              style={{ "--opacity": 0.2 } as any}
              data-opacity={0.2}
            />
          </Link>
          <Link href="/automation/2023">
            <path
              id="automation_2023"
              data-tip="Automation|2023"
              data-for="segment"
              className={styles.segment}
              fill="#0f62fe"
              d="M316.396 393.645a115.678 115.678 0 0 0 10.836 12.511l28.284-28.284c-13.572-13.572-21.967-32.322-21.967-53.033h-40c0 23.817 7.24 45.943 19.64 64.298a116.734 116.734 0 0 0 3.206 4.509Z"
              style={{ "--opacity": 0.35 } as any}
              data-opacity={0.35}
            />
          </Link>
          <Link href="/automation" data-tip="Automation" data-for="label">
            <text id="automation_label" transform="translate(0 459.988)">
              <tspan x="0" y="0">
                Automation
              </tspan>
            </text>
          </Link>
          <path
            id="automation_full"
            className={styles.full}
            fill="url(#linear-gradient-5)"
            d="M333.55 324.839h-240c0 86.985 35.258 165.735 92.261 222.739l169.706-169.706c-13.572-13.572-21.967-32.322-21.967-53.033Z"
          />
          <g id="automation_nodes" className={styles.nodes}>
            <path
              fill="none"
              stroke="#c1c7cd"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m117.585 445.735 222.204-92.04"
            />
            <path
              fill="#121619"
              d="m336.755 352.805 3.694-1.536 1.535 3.694-3.694 1.535-1.535-3.693Zm-36.98 15.314 3.694-1.535 1.535 3.694-3.694 1.535-1.535-3.694Zm-36.961 15.309 3.694-1.535 1.535 3.693-3.694 1.536-1.535-3.694Zm-36.924 15.318 3.693-1.535 1.535 3.694-3.694 1.535-1.534-3.694Zm-37 15.302 3.694-1.535 1.535 3.693-3.694 1.536-1.535-3.694Zm-36.958 15.308 3.693-1.535 1.536 3.693-3.694 1.535-1.535-3.693Z"
            />
          </g>
          <g
            id="automation_nodes_hover"
            className={cx(styles.nodes, styles.hoverNodes)}
          >
            <path
              fill="#0f62fe"
              d="m336.755 352.805 3.694-1.536 1.535 3.694-3.694 1.535-1.535-3.693Zm-36.98 15.314 3.694-1.535 1.535 3.694-3.694 1.535-1.535-3.694Zm-36.961 15.309 3.694-1.535 1.535 3.693-3.694 1.536-1.535-3.694Zm-36.924 15.318 3.693-1.535 1.535 3.694-3.694 1.535-1.534-3.694Zm-37 15.302 3.694-1.535 1.535 3.693-3.694 1.536-1.535-3.694Zm-36.958 15.308 3.693-1.535 1.536 3.693-3.694 1.535-1.535-3.693Z"
            />
            <path
              fill="none"
              stroke="#0f62fe"
              strokeMiterlimit="10"
              strokeWidth=".5"
              d="m117.585 445.735 222.204-92.04"
            />
          </g>
        </g>
        <g className={styles.technology} id="ai">
          <Link href="/ai/2025">
            <path
              id="ai_2025"
              data-tip="AI|2025"
              data-for="segment"
              className={styles.segment}
              fill="#82cfff"
              d="M261.101 197.226a195.606 195.606 0 0 0-21.716 30.55 193.753 193.753 0 0 0-18.438 43.679c-4.818 16.966-7.397 34.873-7.397 53.384h40c0-42.802 17.349-81.552 45.398-109.602l-28.284-28.284a198.365 198.365 0 0 0-9.563 10.273Z"
              style={{ "--opacity": 0.25 } as any}
              data-opacity={0.25}
            />
          </Link>
          <Link href="/ai/2029">
            <path
              id="ai_2029"
              data-tip="AI|2029"
              data-for="segment"
              className={styles.segment}
              fill="#82cfff"
              d="M184.286 165.645a274.479 274.479 0 0 0-31.661 58.359c-12.312 31.222-19.075 65.239-19.075 100.836h40c0-30.419 5.78-59.488 16.3-86.169a234.628 234.628 0 0 1 30.386-54.437 236.328 236.328 0 0 1 22.144-25.566l-28.284-28.284a276.15 276.15 0 0 0-29.81 35.261Z"
              style={{ "--opacity": 0.15 } as any}
              data-opacity={0.15}
            />
          </Link>
          <Link href="/ai/2024">
            <path
              id="ai_2024"
              data-tip="AI|2024"
              data-for="segment"
              className={styles.segment}
              fill="#82cfff"
              d="M293.55 324.839c0-23.817 7.24-45.943 19.64-64.298a115.531 115.531 0 0 1 14.042-17.02l-28.284-28.284c-28.05 28.049-45.398 66.799-45.398 109.602h40Z"
              style={{ "--opacity": 0.3 } as any}
              data-opacity={0.3}
            />
          </Link>
          <Link href="/ai/2030">
            <path
              id="ai_2030"
              data-tip="AI|2030"
              data-for="segment"
              className={styles.segment}
              fill="#82cfff"
              d="M133.55 324.839c0-35.596 6.763-69.613 19.075-100.836a274.523 274.523 0 0 1 31.661-58.359 276.452 276.452 0 0 1 29.81-35.261l-28.284-28.284a316.725 316.725 0 0 0-42.636 52.957 314.152 314.152 0 0 0-27.777 54.278 311.532 311.532 0 0 0-9.9 29.268 313.248 313.248 0 0 0-8.321 38.264 317.553 317.553 0 0 0-3.629 47.971h40v.002Z"
              style={{ "--opacity": 0.1 } as any}
              data-opacity={0.1}
            />
          </Link>
          <Link href="/ai/2027">
            <path
              id="ai_2027"
              data-tip="AI|2027"
              data-for="segment"
              className={styles.segment}
              fill="#82cfff"
              d="M213.684 193.448a234.74 234.74 0 0 0-16.961 29.509 233.513 233.513 0 0 0-6.873 15.714c-10.521 26.681-16.3 55.75-16.3 86.169h40c0-18.51 2.579-36.418 7.397-53.384 3.041-10.707 7-21.131 11.832-31.157a194.288 194.288 0 0 1 6.606-12.522 195.463 195.463 0 0 1 31.279-40.823L242.38 158.67a236.337 236.337 0 0 0-28.696 34.78v-.002Z"
              style={{ "--opacity": 0.2 } as any}
              data-opacity={0.2}
            />
          </Link>
          <Link href="/ai/2023">
            <path
              id="ai_2023"
              data-tip="AI|2023"
              data-for="segment"
              className={styles.segment}
              fill="#82cfff"
              d="M318.077 253.839a114.927 114.927 0 0 0-4.887 6.702c-12.4 18.354-19.64 40.48-19.64 64.298h40c0-6.472.82-12.753 2.361-18.744 3.391-13.18 10.275-24.958 19.606-34.289l-28.284-28.284a115.786 115.786 0 0 0-9.155 10.318Z"
              style={{ "--opacity": 0.35 } as any}
              data-opacity={0.35}
            />
          </Link>
          <Link href="/ai" data-tip="AI" data-for="label">
            <text id="ai_label" transform="translate(78.925 202.988)">
              <tspan x="0" y="0">
                AI
              </tspan>
            </text>
          </Link>
          <path
            id="ai_full"
            className={styles.full}
            fill="url(#linear-gradient-6)"
            d="M355.517 271.806 185.811 102.1C128.807 159.104 93.55 237.854 93.55 324.839h240c0-20.711 8.395-39.461 21.967-53.033Z"
          />
          <g id="ai_nodes" className={styles.nodes}>
            <path
              fill="none"
              stroke="#c1c7cd"
              strokeMiterlimit="10"
              strokeWidth=".75"
              d="m339.044 296.366-221.703-91.833"
            />
            <path
              fill="#121619"
              d="m229.334 253.06-3.698-1.526 1.526-3.697 3.698 1.526-1.526 3.697Zm-36.979-15.304-3.697-1.525 1.526-3.698 3.697 1.526-1.526 3.697Zm-36.995-15.323-3.698-1.526 1.527-3.697 3.697 1.526-1.526 3.697Zm110.928 45.948-3.697-1.526 1.526-3.698 3.697 1.527-1.526 3.697Zm36.946 15.303-3.698-1.526 1.526-3.697 3.698 1.526-1.526 3.697Zm36.998 15.325-3.698-1.526 1.527-3.698 3.697 1.527-1.526 3.697Z"
            />
          </g>
          <g
            id="ai_nodes_hover"
            className={cx(styles.nodes, styles.hoverNodes)}
          >
            <path
              fill="#82cfff"
              d="m229.334 253.06-3.698-1.526 1.526-3.697 3.698 1.526-1.526 3.697Zm-36.979-15.304-3.697-1.525 1.526-3.698 3.697 1.526-1.526 3.697Zm-36.995-15.323-3.698-1.526 1.527-3.697 3.697 1.526-1.526 3.697Zm110.928 45.948-3.697-1.526 1.526-3.698 3.697 1.527-1.526 3.697Zm36.946 15.303-3.698-1.526 1.526-3.697 3.698 1.526-1.526 3.697Zm36.998 15.325-3.698-1.526 1.527-3.698 3.697 1.527-1.526 3.697Z"
            />
            <path
              fill="none"
              stroke="#82cfff"
              strokeMiterlimit="10"
              strokeWidth=".75"
              d="m339.044 296.366-221.703-91.833"
            />
          </g>
        </g>
      </svg>
      <ReactTooltip
        html
        className={styles.tooltip}
        getContent={(dataTip) => {
          if (!dataTip) return "";
          const [technology, year] = dataTip.split("|");

          const { milestones } = technologies.find((t: any) => {
            return t.name === technology;
          });

          const { milestone } = milestones.find((m: any) => {
            return m.year === year;
          });

          return `<p class="${styles.tooltipHeading}">${technology} ${year}</p><p class="${styles.tooltipBody}">${milestone}</p>`;
        }}
        id="segment"
      />
      <ReactTooltip
        html
        multiline
        className={styles.tooltip}
        getContent={(dataTip) => {
          if (!dataTip) return "";
          const { description } = technologies.find((t: any) => {
            return t.name === dataTip;
          });
          return `<p style="font-weight: bold">${dataTip}</p><p style="max-width: 250px">${description}</p>`;
        }}
        id="label"
      />
    </div>
  );
};

export default Atlas;

<menu
        className={`${styles.menuServices} ${
          menuServicesActive ? styles.active : ""
        }`}
      >
        <div
          className={styles.backSection}
          onMouseLeave={() => setMenuServices(false)}
        >
          <div></div>
          <div className={styles.contact}>
            <h3>Let&apos;s work together</h3>
            <button>Make an appointment</button>
          </div>
        </div>

        <div className={styles.body} style={{ backgroundColor: "#0B1C23" }}>
          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>
                <span>Cloud</span> Services
              </span>
            </h3>
            <div className={styles.videoDiv}>
              <CloudSvg className={styles.svgElement} />
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>Integration</span> Services
            </h3>
            <div className={styles.videoDiv}>
              <IntegrationSvg className={styles.svgElement} />
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>Security</span> Services
            </h3>
            <div className={styles.videoDiv}>
              <SecuritySvg className={styles.svgElement} />
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>Product</span> Development
            </h3>
            <div className={styles.videoDiv}>
              <ProductSvg className={styles.svgElement} />
            </div>
          </div>
        </div>
      </menu>



      // ✅ Import SVGs via SVGR (for inline SVG rendering)
import CloudSvg from "@/app/assets/svgs/1.svg";
import SecuritySvg from "@/app/assets/svgs/2.svg";
import IntegrationSvg from "@/app/assets/svgs/3.svg";
import ProductSvg from "@/app/assets/svgs/4.svg";

// ✅ Import SVGs via SVGR (for inline SVG rendering)
import CloudSvg from "../../assets/svgs/1.svg";
import SecuritySvg from "../../assets/svgs/2.svg";
import IntegrationSvg from "../../assets/svgs/3.svg";
import ProductSvg from "../../assets/svgs/4.svg";
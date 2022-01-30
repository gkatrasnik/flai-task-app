import React from "react";
import "../potree.css";

const Potree = window.Potree;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      >
        <div id="potree_render_area"></div>
        <div id="potree_sidebar_container"> </div>
      </div>
    );
  }

  componentDidMount() {
    const viewer = new Potree.Viewer(
      document.getElementById("potree_render_area")
    );

    viewer.setEDLEnabled(false);
    viewer.setFOV(60);
    viewer.setPointBudget(1_000_000);
    viewer.loadSettingsFromURL();
    viewer.setBackground("skybox");

    viewer.setDescription("FLAI Point Cloud Viewer, Gašper Katrašnik");

    viewer.loadGUI(() => {
      viewer.setLanguage("en");

      viewer.toggleSidebar();
    });

    // Load and add point cloud to scene
    Potree.loadPointCloud("./pointcloud/test/metadata.json", "test", (e) => {
      let scene = viewer.scene;
      let pointcloud = e.pointcloud;

      let material = pointcloud.material;
      material.size = 1;
      material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
      material.shape = Potree.PointShape.SQUARE;

      scene.addPointCloud(pointcloud);

      viewer.fitToScreen();
    });
  }
}

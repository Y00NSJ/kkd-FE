// Import 섹션
import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
import { Canvas } from "@react-three/fiber";
import Layout from "../layouts/Layout";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Color } from "three";

// 그룹 정의
const groups = {
  Poster: ["Cube149_Poster1_0", "Cube149_Gradient_0"],
  Bed: [
    "Bed_Gradient_0",
    "Blanket_Gradient_0",
    "Pillow_Gradient_0",
    "Pillow001_Gradient_0",
  ],
  Cupboard: [
    "Cupboard_Gradient_0",
    "DrawerHandle004_Sock1_0",
    "DrawerHandle005_Sock1_0",
  ],
  Rug: ["Rug_Gradient_0"],
  Lamp: ["Lamp_Gradient_0", "LampShade_Gradient_0"],
  DrawerChest: [
    "BedsideTable001_Gradient_0",
    "DrawerHandle003_CoffeeTableLegs_0",
    "DrawerHandle002_CoffeeTableLegs_0",
  ],
};

// GirlModel 컴포넌트 (변경 없음)
const GirlModel = (props) => {
  const gltf = useGLTF("/girl/scene.gltf"); // GLTF 파일 로드
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        if (!child.userData.originalPosition) {
          child.userData.originalPosition = child.position.clone();
        }
      }
    });
  }, [gltf]);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        if (hovered) {
          child.material.emissive = new Color(0x444444);
          child.material.emissiveIntensity = 1;
          child.position.y = child.userData.originalPosition.y + 0.1;
        } else if (active) {
          child.material.emissive = new Color(0x888888);
          child.material.emissiveIntensity = 0.5;
          child.position.y = child.userData.originalPosition.y - 0.05;
        } else {
          child.material.emissive = new Color(0x000000);
          child.material.emissiveIntensity = 0;
          child.position.y = child.userData.originalPosition
            ? child.userData.originalPosition.y
            : child.position.y;
        }
        child.material.needsUpdate = true;
      }
    });
  }, [hovered, active, gltf]);

  const handleClick = (e) => {
    e.stopPropagation();
    setActive(!active);
    console.log("Girl model clicked!");
    // 추가적인 액션을 여기에 구현할 수 있습니다.
  };

  return (
    <primitive
      object={gltf.scene}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={handleClick}
    />
  );
};

// 수정된 Model 컴포넌트
const Model = () => {
  const navigate = useNavigate(); // useNavigate를 컴포넌트 내부에서 호출
  const gltf = useGLTF("/models/scene.gltf"); // GLTF 파일 로드
  const groupRefs = useRef({});

  // 호버 상태를 관리하는 state
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);

  // 컴포넌트가 마운트된 후 그룹별 메쉬를 찾아 Ref에 저장
  useEffect(() => {
    // 초기화
    groupRefs.current = {};
    for (const groupName in groups) {
      groupRefs.current[groupName] = [];
    }

    // GLTF 씬을 순회하며 그룹별 메쉬를 찾음
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        for (const [groupName, meshNames] of Object.entries(groups)) {
          if (meshNames.includes(child.name)) {
            groupRefs.current[groupName].push(child);
            // 재질을 복제하여 다른 객체에 영향을 주지 않도록 함
            child.material = child.material.clone();
            // 원래 위치 저장
            if (child.position) {
              if (!child.userData.originalPosition) {
                child.userData.originalPosition = child.position.clone();
              }
            }
            break;
          }
        }
      }
    });

    console.log("Groups have been initialized and materials cloned.");
  }, [gltf]);

  // 호버 상태에 따라 그룹의 재질을 수정
  useEffect(() => {
    for (const [groupName, meshes] of Object.entries(groupRefs.current)) {
      meshes.forEach((mesh) => {
        if (hoveredGroup === groupName) {
          // 밝게 빛나도록 emissive 설정
          mesh.material.emissive = new Color(0xffffff); // 밝은 발광 설정
          mesh.material.emissiveIntensity = 1;
          mesh.position.z = mesh.userData.originalPosition.z + 0.3; // 위로 이동
        } else if (activeGroup === groupName) {
          mesh.position.z = mesh.userData.originalPosition.z - 0.1; // 약간 아래로 이동
        } else {
          mesh.material.emissive = new Color(0x000000); // 발광 색상 초기화
          mesh.material.emissiveIntensity = 0;
          mesh.position.z = mesh.userData.originalPosition.z; // 원래 위치로 복원
        }
        mesh.material.needsUpdate = true;
      });
    }
  }, [hoveredGroup, activeGroup]);

  // 클릭 이벤트 핸들러 수정
  const handleClick = (event) => {
    const clickedObjectName = event.object.name;

    // 특정 객체 클릭 무시 (예: Poster는 이미 처리됨)
    if (groups.Poster.includes(clickedObjectName)) {
      console.log(`Clicked object: ${clickedObjectName} (Group: Poster)`);
      setTimeout(() => {
        navigate("/dreams/write/"); // 2초 딜레이 후 페이지 이동
      }, 2000);
      return;
    }

    // 클릭된 객체가 속한 그룹 찾기
    for (const [groupName, meshNames] of Object.entries(groups)) {
      if (meshNames.includes(clickedObjectName)) {
        console.log(
          `Clicked object: ${clickedObjectName} (Group: ${groupName})`
        );
        // 그룹에 따라 페이지 이동
        switch (groupName) {
          case "Bed":
            navigate("/dreams/view/");
            break;
          case "Cupboard":
            navigate("/dreams/list/");
            break;
          case "DrawerChest":
            navigate("/friends/list/");
            break;
          case "Lamp":
            navigate("/dreams/write/"); // 필요 시 수정
            break;
          case "Rug":
            navigate("/dreams/view/"); // 필요 시 수정
            break;
          default:
            console.log("No page associated with this group.");
            break;
        }
        break;
      }
    }
  };

  // 클릭 종료 시 액티브 상태 리셋 (필요 시 유지)
  const handlePointerUp = (event) => {
    setActiveGroup(null);
  };

  // 호버 시작 시 상태 업데이트
  const handlePointerOver = (event) => {
    const objectName = event.object.name;
    for (const [groupName, meshNames] of Object.entries(groups)) {
      if (meshNames.includes(objectName)) {
        setHoveredGroup(groupName);
        console.log(`Pointer over group: ${groupName}`);
        return;
      }
    }
  };

  // 호버 종료 시 상태 업데이트
  const handlePointerOut = (event) => {
    const objectName = event.object.name;
    for (const [groupName, meshNames] of Object.entries(groups)) {
      if (meshNames.includes(objectName)) {
        setHoveredGroup(null);
        console.log(`Pointer out of group: ${groupName}`);
        return;
      }
    }
  };

  return (
    <primitive
      object={gltf.scene}
      scale={0.02} // 모델의 크기를 조정하세요
      onPointerDown={handleClick}
      onPointerUp={handlePointerUp}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

// PostLoginScreen 컴포넌트
const PostLoginScreen = ({ onLogout }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="flex items-center justify-center min-h-screen">
        {/* 3D Canvas */}
        <div className="canvas-container">
          <Canvas camera={{ position: [35, 10, 10], fov: 70 }}>
            <OrbitControls target={[23, 3, -7]} />
            <Environment files="/hdri/venice_sunset_1k.hdr" />
            <Model /> {/* 수정된 Model 컴포넌트 사용 */}
            <GirlModel position={[27, -10, -20]} scale={3} />
          </Canvas>
        </div>
        {/* Dream Create Button */}
        {/* <button
          onClick={() => {
            console.log("이동");
            navigate("/dreams/create/");
          }}
          className="btn-primary"
        >
          Dream Create
        </button> */}
        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default PostLoginScreen;

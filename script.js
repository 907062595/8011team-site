const translations = {
  zh: {
    navRobot: "整机",
    navVideo: "视频",
    navSystems: "机构",
    navIterations: "迭代",
    navSoftware: "软件",
    navScouting: "侦察系统",
    navResources: "资源",
    heroKicker: "FRC Team 8011 / 广州哇一 / Founded 2019",
    heroText: "以完整 CAD 为主视觉，鼠标移动到不同机构时保留整机轮廓，并突出当前模块，方便队员和访客按结构理解机器人。",
    boardLabel: "Technical overview",
    boardTitle: "Robot architecture",
    driveCalloutTitle: "Drivetrain",
    driveCalloutText: "四角 swerve 底盘、底板开孔、电控空间和上层机构安装基准。",
    pickupCalloutTitle: "Pickup",
    pickupCalloutText: "前端拾取机构独立展示，用于说明球进入机器人的第一段路径。",
    hopperCalloutTitle: "Hopper",
    hopperCalloutText: "内部整理与转运结构，解释球如何被导向射球机构。",
    shooterCalloutTitle: "Shooter",
    shooterCalloutText: "双滚筒射球结构、侧板支撑和发射角度预留。",
    tabDrive: "底盘",
    tabPickup: "拾取",
    tabHopper: "转运",
    tabShooter: "射球",
    statTeam: "FRC 队号",
    statFounded: "创队年份",
    statEvents: "2026 区域赛",
    statArchive: "核心档案",
    videoKicker: "Robot film",
    videoTitle: "机器人宣传视频",
    videoText: "这里放置 8011 机器人宣传片，用真实运行画面补充 CAD 技术展示，让访客同时看到设计结构和赛场表现。",
    systemsKicker: "Subsystem breakdown",
    systemsTitle: "像技术手册一样拆解机器人",
    systemsText: "这一部分把完整机器人拆成底盘、拾取、Hopper 转运和射球四个模块。每年更新新机器人时，只需要替换 CAD 渲染和模块说明。",
    driveTitle: "27 × 27 英寸全向底盘",
    driveBody: "底盘采用 SDS MK5n swerve，在为整机球路留出空间的同时保持灵活的场上移动能力。",
    driveDetailOne: "1/16 英寸减重开孔底板承载电池与电控；上方 Roller Floor 可整体翻起，快速露出维护区域。",
    driveDetailTwo: "底盘两侧设置塑料滑条，帮助机器人更平顺地越过场地 Bump。",
    driveDetailThree: "保险杠使用 WCP 锥形安装座，聚碳酸酯内壁同时约束并支撑可展开 Hopper。",
    pickupTitle: "全宽翻转式拾取机构",
    pickupBody: "全宽 Slapdown Intake 由一台 Kraken X60 和紧凑型 MAXSpline 齿轮箱驱动展开，在缩小收纳空间的同时保持快速响应。",
    pickupDetailOne: "两台 X60 驱动 2 英寸硅胶包覆碳纤维主滚筒，并配合 1.25 英寸碳纤维 Kicker Bar 快速把球送入机器人。",
    pickupDetailTwo: "两根套有 0.625 英寸碳纤维管的六角轴与 3D 打印惰轮隔套共同导球，避免球再次接触主滚筒。",
    pickupDetailThree: "1/8 英寸厚的 2 × 1 英寸铝制防撞梁与可快速更换的 SRPP 侧板共同承受正面冲击。",
    hopperTitle: "扩展式 Hopper 与 Roller Floor",
    hopperBody: "Hopper 由随拾取机构运动的水平扩展段和安装在攀爬结构上的竖直扩展段组成，使用 #25 链条与一台 Kraken X60 控制升降。",
    hopperDetailOne: "侧面采用 1/8 英寸聚碳酸酯，前部使用双层瓦楞塑料，并通过折弯金属角件、VHB 与铆钉连接。",
    hopperDetailTwo: "侧板斜槽和定制法兰隔柱协调扩展动作；连接攀爬结构的方管与折弯挡板把球保留在 Shooter 一侧。",
    hopperDetailThree: "下方 Roller Floor 由 5 根 1 英寸死轴滚筒和 3 根 2 英寸 Flex Wheel 滚筒组成，通过逐步增大的倾角减少卡球并提高输送效率。",
    shooterTitle: "全宽 Ball Tunnel 与可调射球机构",
    shooterBody: "两块相距 25 英寸的 3/16 英寸铝制侧板构成全宽 Ball Tunnel，把 Roller Floor 送来的球预加速至约 70% 的出射速度。",
    shooterDetailOne: "Ball Tunnel 使用两台 X60 和 1.25 英寸死轴背压滚筒；独立 X60 驱动 2 英寸 Feeder Roller 将球送至竖直路径。",
    shooterDetailTwo: "3.5 英寸铝制主射球滚筒与三根 Hood Roller 机械联动，接触面使用滑板砂带，并由四台 X60 提供远距离射球功率。",
    shooterDetailThree: "Hood 由一台 Kraken X44 驱动，并通过横跨机器人的 Jackshaft 传递扭矩，实现宽范围出射角调节。",
    iterationsKicker: "Robot evolution / iteration",
    iterationsTitle: "两次迭代，看见结构如何收敛",
    iterationsText: "从第一版的侧视布局到第二版更紧凑的机构整合，拖动对比两次方案在包装空间、传动结构和维护路径上的变化。",
    iterationOneLabel: "01 / 第一次迭代",
    iterationTwoLabel: "02 / 第二次迭代",
    compareCaption: "拖动滑块：左侧第二次迭代 / 右侧第一次迭代",
    softwareKicker: "Software and data",
    softwareTitle: "从子系统到自动模式",
    softwareText: "8011 使用 WPILib Command-Based 架构，把每个机构、单项动作和完整得分流程分层组织，让裁判能从场上表现一路看懂程序如何协同机器人。",
    chapterSystems: "核心系统",
    chapterCommands: "核心指令",
    chapterDesign: "关键设计",
    chapterAuto: "自动模式",
    architectureTitle: "先看懂程序怎样组织机器人",
    architectureText: "我们把程序分成三层：机构负责硬件，指令定义动作，复合指令把多个动作编排成裁判在场上看到的完整流程。",
    subsystemTitle: "子系统",
    subsystemText: "对应一个真实机构，例如底盘、拾取、转运或射球，集中管理电机、传感器和状态。",
    commandTitle: "指令",
    commandText: "告诉某个机构执行一个明确动作，例如设定飞轮转速、放下拾取或转向目标。",
    complexCommandTitle: "复合指令",
    complexCommandText: "把多个机构按顺序或并行组合，形成取球、移动、瞄准和射球的完整得分流程。",
    coreSystemsTitle: "五个核心系统",
    coreSystemsText: "每个子系统只管理自己的硬件和闭环状态，再通过指令层与其他机构协同。",
    systemDriveTitle: "全向底盘",
    systemDriveText: "四轮 swerve 支持场地坐标控制；PathPlanner 跟随自动路径，并按联盟颜色自动镜像。",
    systemShooterTitle: "射球机构",
    systemShooterText: "依据实测距离表计算飞轮速度与俯仰角，移动射球时补偿底盘 X / Y 方向速度。",
    systemFeederTitle: "送球机构",
    systemFeederText: "双通道完成上送与后送；电流过高时停止送料防止卡球，LaserCAN 检测预装球是否到位。",
    systemIntakeTitle: "地面取球",
    systemIntakeText: "利用堵转电流寻找机械零点，再运动到经过测试的展开位置，滚轮完成地面取球。",
    systemVisionTitle: "视觉系统",
    systemVisionText: "三台 Limelight 从不同方向识别 AprilTag；MegaTag2 位姿与里程计融合，为路径和自动瞄准提供位置。",
    coreCommandsTitle: "把机构变成场上动作",
    coreCommandsText: "核心指令以“裁判能看到什么”为目标：瞄准、取球与射球流程都能独立触发，也能被自动程序复用。",
    aimCommandTitle: "移动中实时瞄准",
    aimCommandText: "右扳机触发后，视觉位姿与 HUB 目标位置形成航向误差，PID 在机器人移动时持续修正朝向。",
    aimCommandResult: "场上效果：驾驶员保持移动，机器人自动面向目标。",
    intakeCommandTitle: "按场地区域取球",
    intakeCommandText: "Intake Next To Hub、Wall 与 Side 将不同位置的取球动作封装为可重复调用的指令。",
    intakeCommandResult: "场上效果：一键执行对应区域的取球动作。",
    scoreCommandTitle: "组合完整得分流程",
    scoreCommandText: "ShootWithFeeder、PassTrench 与 BackShootGo 按顺序或并行协调飞轮、送料、取球和底盘。",
    scoreCommandResult: "场上效果：多个机构一次触发、按状态自动衔接。",
    keyDesignTitle: "为比赛可靠性设计",
    keyDesignText: "这些设计让同一套程序在不同联盟、不同速度和不同球路状态下保持一致行为。",
    allianceTitle: "联盟自适应",
    allianceText: "自动识别红蓝方并翻转场地坐标系，一套路径逻辑适配两侧比赛。",
    movingShotTitle: "移动射球补偿",
    movingShotText: "分解底盘 X / Y 速度，预测释放球时的位置并补偿瞄准角度与射球速度。",
    protectionTitle: "传感保护",
    protectionText: "送料电流用于防卡球，LaserCAN 确认预装球，拾取堵转电流用于建立机械零点。",
    layeredTitle: "分层架构",
    layeredText: "底层子系统控制硬件，中层指令定义动作，上层复合指令编排完整流程。",
    autoModeTitle: "自动模式",
    autoModeText: "路径点用 X、Y、朝向角和移动速度四项数据描述；坐标与动作逻辑分离，让路线更容易修改和复用。",
    autoTitle: "路径与动作协同",
    autoText: "程序预加载路线并根据联盟颜色完成镜像。机器人沿路径取球时提前预热飞轮，到达射击区域后由视觉与航向 PID 自动修正，再送料完成射球。",
    autoRoutineOne: "自动程序 01",
    autoRoutineTwo: "自动程序 02",
    autoRoutineThree: "自动程序 03",
    autoFactRoutes: "套比赛路线",
    autoFactLoop: "调度周期预算",
    autoFactMirror: "红蓝联盟镜像",
    programFlowTitle: "一次自动得分循环",
    programFlowText: "从路线加载到下一次循环，每一步都对应真实程序中的状态判断与命令组合。",
    flowPreloadTitle: "加载并镜像路线",
    flowPreloadText: "按联盟与起始侧生成路径。",
    flowPickupTitle: "取球并沿路径移动",
    flowPickupText: "拾取、转运与底盘并行运行。",
    flowWarmupTitle: "提前预热飞轮",
    flowWarmupText: "抵达射击点前达到目标转速。",
    flowVisionTitle: "视觉更新位姿",
    flowVisionText: "AprilTag 观测融合里程计。",
    flowAimTitle: "PID 自动瞄准",
    flowAimText: "路径有偏差时仍修正朝向。",
    flowShootTitle: "送料并继续循环",
    flowShootText: "达到速度与角度后完成射球。",
    autoAdvOne: "坐标与动作逻辑分离，修改路线只需调整路径数组。",
    autoAdvTwo: "红蓝方自动镜像，一套代码适配两侧比赛。",
    autoAdvThree: "动作支持顺序、并行与竞争组合。",
    autoAdvFour: "条件判断与提前退出避免自动流程卡死。",
    autoAdvFive: "飞轮提前预热，抵达射击点时已接近目标转速。",
    autoAdvSix: "视觉自瞄实时修正路径误差。",
    downloadCode: "下载 8011 机器人程序",
    scoutingTitle: "数据侦察系统",
    scoutingText: "从赛程分配、现场记录和数据质量检查，到单队分析、选队清单与联盟模拟，形成完整的比赛决策链路。",
    openScouting: "打开 8011 EagleEye 数据侦察系统 →",
    resourcesKicker: "Resources",
    resourcesTitle: "CAD、图纸与链接",
    onshapeTitle: "Onshape 最新模型",
    pulleyTitle: "拾取同步轮图纸",
    plugTitle: "拾取滚筒金属件图纸",
    firstTitle: "FIRST 官方队伍页",
    programSourceTitle: "机器人程序源码",
    backTop: "返回顶部"
  },
  en: {
    navRobot: "Robot",
    navVideo: "Video",
    navSystems: "Systems",
    navIterations: "Iterations",
    navSoftware: "Software",
    navScouting: "Scouting",
    navResources: "Resources",
    heroKicker: "FRC Team 8011 / Guangzhou WA-YI / Founded 2019",
    heroText: "The full CAD stays at the center. Hover a subsystem to keep the complete robot ghosted while the selected module becomes vivid.",
    boardLabel: "Technical overview",
    boardTitle: "Robot architecture",
    driveCalloutTitle: "Drivetrain",
    driveCalloutText: "Four-corner swerve layout, belly pan openings, electrical space, and mounting references.",
    pickupCalloutTitle: "Pickup",
    pickupCalloutText: "The front pickup is isolated to show the first path the game piece takes into the robot.",
    hopperCalloutTitle: "Hopper",
    hopperCalloutText: "Internal indexing and transfer path explain how the game piece is guided toward the shooter.",
    shooterCalloutTitle: "Shooter",
    shooterCalloutText: "Dual-roller launch structure, side plates, and pitch packaging.",
    tabDrive: "Drivebase",
    tabPickup: "Pickup",
    tabHopper: "Hopper",
    tabShooter: "Shooter",
    statTeam: "FRC team",
    statFounded: "Founded",
    statEvents: "2026 regionals",
    statArchive: "Core archive",
    videoKicker: "Robot film",
    videoTitle: "Robot promo video",
    videoText: "The 8011 robot film adds real operating footage to the CAD technical display, showing both design structure and field performance.",
    systemsKicker: "Subsystem breakdown",
    systemsTitle: "A technical manual for the robot",
    systemsText: "The robot is split into drivetrain, pickup, hopper transfer, and shooter modules. Future seasons can update the same structure with new CAD and subsystem notes.",
    driveTitle: "27 × 27 in omnidirectional drivetrain",
    driveBody: "The drivetrain uses SDS MK5n swerve modules to preserve room for the game-piece path while retaining agile field movement.",
    driveDetailOne: "A pocketed 1/16 in belly pan supports the battery and electronics; the Roller Floor pivots upward to expose the service area.",
    driveDetailTwo: "Plastic strips brace both sides beneath the chassis and help the robot travel smoothly over the field Bump.",
    driveDetailThree: "WCP cone mounts secure the bumpers, whose polycarbonate inner walls also contain and support the expanding Hopper.",
    pickupTitle: "Full-width slapdown intake",
    pickupBody: "One Kraken X60 and a compact MAXSpline gearbox deploy the full-width intake quickly while minimizing its stowed packaging volume.",
    pickupDetailOne: "Two X60s drive a 2 in silicone-covered carbon-fiber roller and a 1.25 in carbon-fiber Kicker Bar to accelerate balls into the robot.",
    pickupDetailTwo: "Two hex shafts sleeved with 0.625 in carbon-fiber tubes and 3D-printed idler spacers guide each ball without letting it recontact the main roller.",
    pickupDetailThree: "A 1/8 in thick 2 × 1 in aluminum crash bar works with hot-swappable SRPP side plates to absorb frontal impacts.",
    hopperTitle: "Expanding Hopper and Roller Floor",
    hopperBody: "The Hopper combines a horizontal extension that moves with the intake and a vertical extension mounted to the climber; #25 chain and one Kraken X60 control its vertical motion.",
    hopperDetailOne: "The sides use 1/8 in polycarbonate and the front uses dual-wall corrugated plastic, joined with bent metal corners, VHB, and rivets.",
    hopperDetailTwo: "Slanted side slots and custom flanged standoffs coordinate extension, while climber-mounted tubes and a bent retainer keep balls on the Shooter side.",
    hopperDetailThree: "Below it, five 1 in dead-axle rollers and three 2 in Flex Wheel rollers form the Roller Floor; progressively steeper angles reduce keystoning and improve throughput.",
    shooterTitle: "Full-width Ball Tunnel and adjustable shooter",
    shooterBody: "Two 3/16 in aluminum side plates spaced 25 in apart form the full-width Ball Tunnel, accelerating balls from the Roller Floor to roughly 70% of shot speed.",
    shooterDetailOne: "Two X60s drive the Ball Tunnel against 1.25 in dead-axle backing rollers; a separate X60 powers the 2 in Feeder Roller into the vertical path.",
    shooterDetailTwo: "A 3.5 in aluminum shooter drum is linked to three Hood Rollers. Grip tape provides traction, while four X60s supply power for long-range shots.",
    shooterDetailThree: "One Kraken X44 actuates the Hood, transferring torque across the robot through a Jackshaft to cover a wide range of launch angles.",
    iterationsKicker: "Robot evolution / iteration",
    iterationsTitle: "Two iterations, one converging design",
    iterationsText: "Drag across the two side-view concepts to compare how packaging, transmission structure, and service access evolved from the first layout to the tighter second iteration.",
    iterationOneLabel: "01 / First iteration",
    iterationTwoLabel: "02 / Second iteration",
    compareCaption: "Drag slider: second iteration on the left / first iteration on the right",
    softwareKicker: "Software and data",
    softwareTitle: "From subsystems to autonomous",
    softwareText: "8011 uses WPILib's Command-Based architecture to organize mechanisms, individual actions, and complete scoring routines in layers, connecting visible field behavior to the code behind it.",
    chapterSystems: "Core systems",
    chapterCommands: "Core commands",
    chapterDesign: "Key design",
    chapterAuto: "Autonomous",
    architectureTitle: "How the program organizes the robot",
    architectureText: "Our code has three layers: subsystems own hardware, commands define actions, and complex commands arrange those actions into complete field routines.",
    subsystemTitle: "Subsystem",
    subsystemText: "Represents one physical mechanism, such as drivetrain, intake, feeder, or shooter, and owns its motors, sensors, and state.",
    commandTitle: "Command",
    commandText: "Tells a mechanism to perform one clear action, such as setting flywheel speed, deploying the intake, or turning toward a target.",
    complexCommandTitle: "Complex command",
    complexCommandText: "Runs several mechanisms sequentially or in parallel to complete intake, motion, aiming, and scoring routines.",
    coreSystemsTitle: "Five core systems",
    coreSystemsText: "Each subsystem manages only its hardware and closed-loop state, then coordinates with the others through commands.",
    systemDriveTitle: "Swerve drivetrain",
    systemDriveText: "Four-wheel swerve supports field-centric control. PathPlanner follows autonomous paths and mirrors them for alliance color.",
    systemShooterTitle: "Shooter",
    systemShooterText: "Measured distance maps set flywheel speed and pitch. Moving shots compensate for chassis velocity along X and Y.",
    systemFeederTitle: "Feeder",
    systemFeederText: "Two channels move game pieces upward and rearward. High current stops a jam, while LaserCAN confirms the preload is in position.",
    systemIntakeTitle: "Ground intake",
    systemIntakeText: "Stall current establishes the mechanical zero before the mechanism moves to its tested deploy position and runs the pickup roller.",
    systemVisionTitle: "Vision",
    systemVisionText: "Three Limelights see AprilTags from different angles. MegaTag2 pose is fused with odometry for paths and automatic aiming.",
    coreCommandsTitle: "Turning mechanisms into field actions",
    coreCommandsText: "Core commands focus on what a judge can see: aiming, collection, and scoring can run independently or be reused inside autonomous routines.",
    aimCommandTitle: "Real-time aim while moving",
    aimCommandText: "When the right trigger is held, robot pose and the HUB target create a heading error. PID continuously corrects orientation while driving.",
    aimCommandResult: "Field result: the driver keeps moving while the robot faces the target.",
    intakeCommandTitle: "Intake by field area",
    intakeCommandText: "Intake Next To Hub, Wall, and Side package collection actions for different field positions into repeatable commands.",
    intakeCommandResult: "Field result: one input runs the collection action for that area.",
    scoreCommandTitle: "Combine a complete scoring routine",
    scoreCommandText: "ShootWithFeeder, PassTrench, and BackShootGo coordinate flywheel, feeder, intake, and drivetrain sequentially or in parallel.",
    scoreCommandResult: "Field result: one trigger starts several mechanisms and advances by state.",
    keyDesignTitle: "Designed for match reliability",
    keyDesignText: "These choices keep behavior consistent across alliances, robot speeds, and changing game-piece states.",
    allianceTitle: "Alliance adaptive",
    allianceText: "The program identifies red or blue and flips the field coordinate frame, so one path logic works on both sides.",
    movingShotTitle: "Moving-shot compensation",
    movingShotText: "Chassis X and Y velocity are decomposed to predict release position and compensate aim angle and shot speed.",
    protectionTitle: "Sensor protection",
    protectionText: "Feeder current prevents jams, LaserCAN confirms the preload, and intake stall current establishes the mechanical zero.",
    layeredTitle: "Layered architecture",
    layeredText: "Subsystems control hardware, commands define actions, and complex commands arrange complete routines.",
    autoModeTitle: "Autonomous mode",
    autoModeText: "Each path point stores X, Y, heading, and speed. Separating coordinates from action logic makes routes easier to adjust and reuse.",
    autoTitle: "Paths and actions working together",
    autoText: "The program preloads and mirrors a route. While collecting along the path, it spins up the flywheel early; vision and heading PID then correct aim before the feeder releases the shot.",
    autoRoutineOne: "Autonomous routine 01",
    autoRoutineTwo: "Autonomous routine 02",
    autoRoutineThree: "Autonomous routine 03",
    autoFactRoutes: "match routes",
    autoFactLoop: "scheduler budget",
    autoFactMirror: "red-blue mirroring",
    programFlowTitle: "One autonomous scoring cycle",
    programFlowText: "From route loading to the next cycle, each step maps to real state checks and command groups in the robot program.",
    flowPreloadTitle: "Load and mirror route",
    flowPreloadText: "Generate the path for alliance and start side.",
    flowPickupTitle: "Collect along the path",
    flowPickupText: "Run intake, feeder, and drivetrain in parallel.",
    flowWarmupTitle: "Preheat the flywheel",
    flowWarmupText: "Reach target speed before the shooting point.",
    flowVisionTitle: "Update pose with vision",
    flowVisionText: "Fuse AprilTag observations with odometry.",
    flowAimTitle: "Aim automatically with PID",
    flowAimText: "Correct heading even when the path has error.",
    flowShootTitle: "Feed and continue",
    flowShootText: "Release the shot after speed and angle are ready.",
    autoAdvOne: "Coordinates and action logic are separate, so route edits only change path arrays.",
    autoAdvTwo: "Red-blue mirroring lets one code path work on both sides.",
    autoAdvThree: "Actions support sequential, parallel, and race composition.",
    autoAdvFour: "Conditions and early exits keep autonomous routines from stalling.",
    autoAdvFive: "The flywheel spins up early and reaches target speed before the shot.",
    autoAdvSix: "Vision aiming corrects path error in real time.",
    downloadCode: "Download the 8011 robot code",
    scoutingTitle: "Scouting system",
    scoutingText: "Schedule assignment, field entry, data-quality checks, team analysis, picklists, and alliance simulation form one competition decision chain.",
    openScouting: "Open the 8011 EagleEye scouting system →",
    resourcesKicker: "Resources",
    resourcesTitle: "CAD, drawings, and links",
    onshapeTitle: "Latest Onshape model",
    pulleyTitle: "Pickup pulley drawing",
    plugTitle: "Pickup roller plug drawing",
    firstTitle: "FIRST team page",
    programSourceTitle: "Robot program source",
    backTop: "Back to top"
  }
};

let currentLang = "zh";

const toggle = document.querySelector("#langToggle");
const translatable = document.querySelectorAll("[data-i18n]");
const board = document.querySelector(".robot-board");
const tabs = document.querySelectorAll(".system-tab");
const callouts = document.querySelectorAll(".callout");
const hotspots = document.querySelectorAll(".hotspot");
const highlights = document.querySelectorAll(".cad-image[data-system]");
const connectors = document.querySelectorAll(".cad-connector[data-system]");
const slider = document.querySelector("#compareSlider");
const overlay = document.querySelector("#compareOverlay");
const compareStage = document.querySelector("#compareStage");
const systemOrder = ["drive", "pickup", "hopper", "shooter"];
const autoInterval = 3200;
const autoResumeDelay = 1800;
let autoIndex = -1;
let autoTimer = null;
let interactionPaused = false;

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  toggle.textContent = lang === "zh" ? "EN" : "中";
}

function setSystem(system = null) {
  if (!board) return;
  const activeSystem = system || "full";
  board.dataset.activeSystem = activeSystem;

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.system === activeSystem);
  });

  callouts.forEach((callout) => {
    callout.classList.toggle("active", callout.dataset.system === activeSystem);
  });

  connectors.forEach((connector) => {
    connector.classList.toggle("active", connector.dataset.system === activeSystem);
  });

  highlights.forEach((highlight) => {
    highlight.classList.toggle("active", highlight.dataset.system === activeSystem);
  });
}

function resetSystem() {
  setSystem(null);
}

function showNextSystem() {
  autoIndex = (autoIndex + 1) % systemOrder.length;
  setSystem(systemOrder[autoIndex]);
}

function stopAutoCycle() {
  window.clearTimeout(autoTimer);
  autoTimer = null;
}

function scheduleAutoCycle(delay = autoResumeDelay) {
  stopAutoCycle();
  if (interactionPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  autoTimer = window.setTimeout(() => {
    showNextSystem();
    scheduleAutoCycle(autoInterval);
  }, delay);
}

function updateCompare() {
  if (!slider || !overlay) return;
  const position = Number(slider.value);
  overlay.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
  compareStage?.style.setProperty("--compare-position", `${position}%`);
}

toggle?.addEventListener("click", () => setLanguage(currentLang === "zh" ? "en" : "zh"));

[...tabs, ...callouts, ...hotspots].forEach((control) => {
  control.addEventListener("mouseenter", () => {
    interactionPaused = true;
    stopAutoCycle();
    autoIndex = systemOrder.indexOf(control.dataset.system);
    setSystem(control.dataset.system);
  });
  control.addEventListener("mouseleave", () => {
    interactionPaused = false;
    scheduleAutoCycle();
  });
  control.addEventListener("focus", () => {
    interactionPaused = true;
    stopAutoCycle();
    autoIndex = systemOrder.indexOf(control.dataset.system);
    setSystem(control.dataset.system);
  });
  control.addEventListener("blur", () => {
    interactionPaused = false;
    scheduleAutoCycle();
  });
});

tabs.forEach((tab) => tab.addEventListener("click", () => setSystem(tab.dataset.system)));
hotspots.forEach((hotspot) => hotspot.addEventListener("click", () => setSystem(hotspot.dataset.system)));
slider?.addEventListener("input", updateCompare);

setLanguage(currentLang);
resetSystem();
updateCompare();
scheduleAutoCycle();

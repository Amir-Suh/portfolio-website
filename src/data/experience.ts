import type { WorkExperience, Education } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    company: "OptMAI Lab",
    role: "Deep Learning Researcher",
    location: "College Station, TX",
    startDate: "Jan 2026",
    endDate: null,
    description: [
      "Improved brain tumor classification on a Kaggle imbalanced dataset, on brain MRI scans, by creating a deep learning model that utilizes a Convolutional Neural Network (CNN) and a pre-developed Deep Area Under Receiver Operating Curve (AUROC) maximization framework.",
      "Experimented with novel optimization techniques to optimize the model's training process, achieving a ~2% performance increase in test accuracy over baseline models.",
    ],
    technologies: ["Python", "PyTorch", "Matplotlib", "scikit-learn", "LibAUC", "Google Colab"],
  },
  {
    company: "AgriLife Lab",
    role: "Computer Vision Researcher",
    location: "College Station, TX",
    startDate: "Aug 2025",
    endDate: "Jan 2026",
    description: [
      "Developed a computer vision model to consistently track cattle and maintain unique IDs across 24 hour video datasets.",
      "Increased prior tracking accuracy by 10% and accelerated large-scale video processing by performing algorithm optimization and streamlining ETL data pipelines.",
      "Co-presented research findings at a research expo, demonstrating how machine learning integration can advance early Bovine Respiratory Disease (BRD) detection.",
    ],
    technologies: ["Python", "YOLOv8", "Grounded SAM", "OpenCV", "Google Colab"],
  },
];

export const education: Education[] = [
  {
    institution: "Texas A&M University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "Aug 2024",
    endDate: "May 2028",
    gpa: "4.0 / 4.0",
    description:
      "Relevant coursework: Algorithms, Distributed Systems, Machine Learning, Software Engineering, Computer Architecture, Operating Systems.",
  },
];

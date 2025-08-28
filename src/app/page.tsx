"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Users, 
  Target, 
  Lightbulb, 
  Star,
  Zap,
  MessageSquare,
  Flame,
  Scale,
  Gift,
  Rocket,
  Brain,
  Share2,
  Star as StarIcon,
  Linkedin,
  Calendar,
  ArrowRight,
  Check,
  Copy
} from "lucide-react";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

import { ParticleBackground } from "@/components/ui/particle-background";
import { FloatingElements } from "@/components/ui/floating-elements";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { GlowingButton } from "@/components/ui/glowing-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GradientText } from "@/components/ui/gradient-text";
import { HeroBackground } from "@/components/ui/hero-background";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function Home() {
  const [showAllProblems, setShowAllProblems] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const linkedInMessage = `🚀 Excited to be part of AlgoRhythm - BEST's AI Hackathon! 

I'm joining 20+ teams to solve real business challenges using AI, competing for ₹60K in prizes, and most importantly - seeing our solutions implemented within 2 months!

Ready to transform challenges into opportunities and build innovative solutions that will shape the future of BEST! 

#AlgoRhythm #InnovateWithAI #BESTSolutions #AIHackathon #SolvingTomorrowToday`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(linkedInMessage);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  const handleShareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://forms.gle/jdCXcczhZK59gqY6A')}&summary=${encodeURIComponent(linkedInMessage)}`;
    window.open(linkedInUrl, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // All 20 Problem Statements
  const allProblemStatements = [
    {
      id: 1,
      number: "#1",
      title: "The Smart Document Processor",
      description: "Build an AI system that automatically extracts, validates, and processes information from various document types (invoices, contracts, forms) with high accuracy.",
      category: "Team Efficiency",
      color: "blue"
    },
    {
      id: 2,
      number: "#2", 
      title: "The Predictive Analytics Dashboard",
      description: "Create a real-time dashboard that predicts merchant churn, payment failures, and revenue trends using machine learning algorithms.",
      category: "Data Accessibility",
      color: "purple"
    },
    {
      id: 3,
      number: "#3",
      title: "The Automated Support Bot",
      description: "Develop an intelligent chatbot that can handle 80% of common merchant queries and automatically escalate complex issues to human agents.",
      category: "Merchant Experience",
      color: "green"
    },
    {
      id: 4,
      number: "#4",
      title: "The Fraud Detection Engine",
      description: "Build an AI-powered system that detects fraudulent transactions in real-time with high precision and minimal false positives.",
      category: "Team Efficiency",
      color: "red"
    },
    {
      id: 5,
      number: "#5",
      title: "The Performance Optimization Tool",
      description: "Create an AI tool that analyzes system performance metrics and automatically suggests optimizations for better efficiency.",
      category: "Transparency to OKRs",
      color: "orange"
    },
    {
      id: 6,
      number: "#6",
      title: "The One-Click Audit Tool",
      description: "Build an enhanced test mode that simulates all product features, payment methods, and user journeys. The tool should run automated tests against an MID, check for integration breakages, and suggest code-level fixes.",
      category: "Merchant Experience",
      color: "blue"
    },
    {
      id: 7,
      number: "#7",
      title: "The Automated Metric Board",
      description: "Create a single dashboard that pulls performance metrics (CCNR, SDR, NPS, MHI) from various sources. The AI component should analyze trends and suggest actionable steps for improvement.",
      category: "Transparency to OKRs",
      color: "purple"
    },
    {
      id: 8,
      number: "#8",
      title: "The Survey Insight Engine",
      description: "Develop an AI algorithm to analyze survey feedback and automatically categorize it by reason, infer merchant use cases, and identify potential knowledge gaps in support processes.",
      category: "Team Efficiency",
      color: "green"
    },
    {
      id: 9,
      number: "#9",
      title: "The \"Ask Me Anything\" Data Bot",
      description: "Build a Text-to-SQL bot that allows anyone to get real-time data by asking questions in natural language, without waiting for the analytics team.",
      category: "Data Accessibility",
      color: "orange"
    },
    {
      id: 10,
      number: "#10",
      title: "The Automated SR Analyst",
      description: "Build an algorithm that automates the entire Service Request analysis process, from data gathering to generating insights and summary reports.",
      category: "Team Efficiency",
      color: "blue"
    },
    {
      id: 11,
      number: "#11",
      title: "The Intelligent Gatekeeper",
      description: "Create a bot that automatically verifies request validity and provides directional overview of where problems might lie and which team should handle them.",
      category: "Team Efficiency",
      color: "purple"
    },
    {
      id: 12,
      number: "#12",
      title: "The Merchant Onboarding Optimizer",
      description: "Develop an AI system that streamlines the merchant onboarding process by automating document verification, risk assessment, and account setup.",
      category: "Merchant Experience",
      color: "green"
    },
    {
      id: 13,
      number: "#13",
      title: "The Real-time Compliance Monitor",
      description: "Build an automated system that monitors transactions for compliance violations and generates real-time alerts for regulatory requirements.",
      category: "Team Efficiency",
      color: "red"
    },
    {
      id: 14,
      number: "#14",
      title: "The Customer Journey Analyzer",
      description: "Create an AI tool that tracks and analyzes merchant interactions across all touchpoints to identify friction points and optimization opportunities.",
      category: "Merchant Experience",
      color: "blue"
    },
    {
      id: 15,
      number: "#15",
      title: "The Automated Report Generator",
      description: "Develop a system that automatically generates comprehensive reports from multiple data sources, with customizable templates and real-time updates.",
      category: "Transparency to OKRs",
      color: "purple"
    },
    {
      id: 16,
      number: "#16",
      title: "The Intelligent Knowledge Base",
      description: "Build an AI-powered knowledge management system that automatically updates, categorizes, and suggests relevant information to support teams.",
      category: "Team Efficiency",
      color: "green"
    },
    {
      id: 17,
      number: "#17",
      title: "The Predictive Maintenance System",
      description: "Create an AI system that predicts system failures and maintenance needs before they occur, reducing downtime and improving reliability.",
      category: "Data Accessibility",
      color: "orange"
    },
    {
      id: 18,
      number: "#18",
      title: "The Automated SLA Monitor",
      description: "Build a system that tracks Service Level Agreements in real-time and automatically escalates issues when thresholds are breached.",
      category: "Transparency to OKRs",
      color: "red"
    },
    {
      id: 19,
      number: "#19",
      title: "The Merchant Sentiment Analyzer",
      description: "Develop an AI tool that analyzes merchant communications to gauge satisfaction levels and identify potential issues before they escalate.",
      category: "Merchant Experience",
      color: "blue"
    },
    {
      id: 20,
      number: "#20",
      title: "The Automated Training Recommender",
      description: "Create an AI system that analyzes employee performance and automatically recommends personalized training programs to improve skills and productivity.",
      category: "Team Efficiency",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <HeroBackground />
        <ParticleBackground />
        <FloatingElements />
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        
        <motion.div 
          className="relative z-10 text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Event Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">September 23-25, 2025</span>
          </motion.div>

          {/* Razorpay Logo */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img src="/razorpaylogowhite.png" alt="Razorpay Logo" className="h-12 mx-auto" />
          </motion.div>

          <GradientText 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8"
            animate={true}
          >
            AlgoRhythm
          </GradientText>

          <motion.p 
            className="text-2xl sm:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Solving Today&apos;s Challenges for a Smarter Tomorrow
          </motion.p>

          <motion.p 
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            🎯 Get ready to unleash your creativity! AlgoRhythm is here to foster innovation, solve real-world business problems within BEST & Solutions, and enhance cross-functional collaboration using the power of AI.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <GlowingButton onClick={() => window.open('https://forms.gle/jdCXcczhZK59gqY6A', '_blank')}>
              Register Now
            </GlowingButton>
          </motion.div>

          {/* Stats Preview */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">23</div>
              <div className="text-gray-400 text-sm">Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2-4</div>
              <div className="text-gray-400 text-sm">Team Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2 + Finale</div>
              <div className="text-gray-400 text-sm">Rounds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">₹60K</div>
              <div className="text-gray-400 text-sm">Prize Pool</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Statement Pool Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5"></div>
        <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <ContainerTextFlip
          className="w-full flex justify-center my-20"
          words={["Experience is paramount at BEST", "Experience is paramount at BEST", "Experience is paramount at BEST", "Experience is paramount at BEST"]}
        />
      </section>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <GradientText className="text-4xl sm:text-5xl font-bold" animate={false}>
                Problem Statement Pool
              </GradientText>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from 23 real-time business challenges designed by BEST leaders. Each problem addresses critical needs across Merchant Experience, Team Efficiency, Data Accessibility, and Transparency to OKRs.
            </p>
          </motion.div>

          {/* Top 5 Priority Problems Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/50 rounded-full px-8 py-4 mb-6">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-bold text-yellow-400">Top 5 Priority Challenges</span>
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Solve these high-priority challenges to earn <span className="text-yellow-400 font-bold">additional brownie points</span> and make the maximum impact!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Top Problem 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-yellow-900/20 to-gray-900 border-2 border-yellow-500/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-xl">
                    <Star className="h-4 w-4 inline mr-1" />
                    <span className="text-sm font-bold">PRIORITY</span>
                  </div>
                  <CardHeader className="pt-12">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-900/50 text-yellow-200 border border-yellow-500/30 text-lg px-3 py-1">#2</Badge>
                      <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30">Team Efficiency</Badge>
                    </div>
                    <CardTitle className="text-xl text-white">
                      Automated Knowledge Base Creation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-base leading-relaxed">
                      An MVC model to automatically pick up unique issues across FD, Slack, DevRev and create both internal and external knowledge bases. AI should create SOPs automatically at issue category level.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Top Problem 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-yellow-900/20 to-gray-900 border-2 border-yellow-500/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-xl">
                    <Star className="h-4 w-4 inline mr-1" />
                    <span className="text-sm font-bold">PRIORITY</span>
                  </div>
                  <CardHeader className="pt-12">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-900/50 text-yellow-200 border border-yellow-500/30 text-lg px-3 py-1">#6</Badge>
                      <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30">Real-time Monitoring</Badge>
                    </div>
                    <CardTitle className="text-xl text-white">
                      Automate SR Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Automate Service Request monitoring through intelligent anomaly detection and real-time alerts to proactively identify and resolve issues.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Top Problem 3 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-yellow-900/20 to-gray-900 border-2 border-yellow-500/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-xl">
                    <Star className="h-4 w-4 inline mr-1" />
                    <span className="text-sm font-bold">PRIORITY</span>
                  </div>
                  <CardHeader className="pt-12">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-900/50 text-yellow-200 border border-yellow-500/30 text-lg px-3 py-1">#10</Badge>
                      <Badge className="bg-green-900/50 text-green-200 border border-green-500/30">Team Efficiency</Badge>
                    </div>
                    <CardTitle className="text-xl text-white">
                      Slack Bot for Sales Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-base leading-relaxed">
                      A dedicated AI-powered Slack bot that acts as first line of defense for sales inquiries, retrieving answers from internal knowledge base and routing complex queries to experts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Top Problem 4 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-yellow-900/20 to-gray-900 border-2 border-yellow-500/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-xl">
                    <Star className="h-4 w-4 inline mr-1" />
                    <span className="text-sm font-bold">PRIORITY</span>
                  </div>
                  <CardHeader className="pt-12">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-900/50 text-yellow-200 border border-yellow-500/30 text-lg px-3 py-1">#14</Badge>
                      <Badge className="bg-orange-900/50 text-orange-200 border border-orange-500/30">Team Efficiency</Badge>
                    </div>
                    <CardTitle className="text-xl text-white">
                      Ripplit Bot for Issue Resolution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-base leading-relaxed">
                      AI-powered bot acting as a layer between customers and tech support, suggesting debugging steps from KB and documentation. Includes Log Analyzer for automated debugging.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Top Problem 5 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="lg:col-span-2 xl:col-span-1"
              >
                <Card className="h-full bg-gradient-to-br from-yellow-900/20 to-gray-900 border-2 border-yellow-500/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-xl">
                    <Star className="h-4 w-4 inline mr-1" />
                    <span className="text-sm font-bold">PRIORITY</span>
                  </div>
                  <CardHeader className="pt-12">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-900/50 text-yellow-200 border border-yellow-500/30 text-lg px-3 py-1">#28</Badge>
                      <Badge className="bg-red-900/50 text-red-200 border border-red-500/30">Merchant Experience</Badge>
                    </div>
                    <CardTitle className="text-xl text-white">
                      Merchant Health Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Centralized dashboard providing holistic view of merchant health with Red/Amber/Green status. Early warning system to proactively identify at-risk merchants and growth opportunities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Problem Statements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Additional Challenge Pool</h3>
              <p className="text-gray-400">18 more exciting challenges to choose from</p>
            </div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-8 mb-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
            {/* Sample Additional Problem Statements - First 6 */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30">#1</Badge>
                    <Badge className="bg-green-900/50 text-green-200 border border-green-500/30">Merchant Experience</Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    Redefining Test Mode
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Enhanced test mode that encompasses all product features, payment methods, and user journeys. Includes one-click audit tool with integration breakage detection and code-level fix suggestions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30">#3</Badge>
                    <Badge className="bg-orange-900/50 text-orange-200 border border-orange-500/30">Transparency to OKRs</Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                    Automated Metric Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Single dashboard pulling performance metrics (CCNR, SDR, NPS, MHI) from various sources. AI provides insights on metric changes and suggests improvement steps.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 hover:border-green-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-900/50 text-green-200 border border-green-500/30">#4</Badge>
                    <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30">Team Efficiency</Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
                    Survey Analysis Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    AI algorithm to analyze DSATs, MHI reductions, and NPS surveys. Infers merchant use cases, categorizes issues, and identifies learning gaps in support processes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-orange-900/50 text-orange-200 border border-orange-500/30">#5</Badge>
                    <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30">Data Accessibility</Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                    &quot;Ask Me Anything&quot; Data Bot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Text-to-SQL Slack bot for instant data access. Get accurate, real-time answers by simply asking questions in natural language, eliminating wait times.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30">#7</Badge>
                    <Badge className="bg-green-900/50 text-green-200 border border-green-500/30">Team Efficiency</Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    Quality of Analysis Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Algorithm that automates the entire Service Request analysis process, handling ~150 monthly analyses across teams with consistent quality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30">#8</Badge>
                    <Badge className="bg-green-900/50 text-green-200 border border-green-500/30">Team Efficiency</Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                    Intelligent Request Gatekeeper
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Bot that verifies validity of thousands of incoming requests, provides directional overview of problems, and routes to appropriate teams automatically.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* View All Problems Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={() => setShowAllProblems(!showAllProblems)}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              {showAllProblems ? "Hide Additional Challenges" : "View All 18 Additional Challenges"}
              <ArrowRight className={`ml-3 h-6 w-6 transition-transform duration-300 ${showAllProblems ? 'rotate-90' : ''}`} />
            </Button>
          </motion.div>

          {/* All Additional Problem Statements Modal */}
          <AnimatePresence>
            {showAllProblems && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-16"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Additional problems 9-30 */}
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30 mb-3">#9</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                          Solution Doc Creator
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI-powered tool automating structured solution document generation from CRM data, discovery calls, and product configurations.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30 mb-3">#11</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors">
                          Checklist Responder
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI tool that ingests merchant checklists and automatically suggests answers from internal knowledge base.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 hover:border-green-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-green-900/50 text-green-200 border border-green-500/30 mb-3">#15</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-green-400 transition-colors">
                          POS Integration Automation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Solution for completing POS integration in a simulated environment, reducing time and device dependency.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-orange-900/50 text-orange-200 border border-orange-500/30 mb-3">#16</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-orange-400 transition-colors">
                          Weekly AI Emailer
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI-powered emailer sending TAM merchants actionable weekly insights on performance trends and open issues.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/30 hover:border-red-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-red-900/50 text-red-200 border border-red-500/30 mb-3">#17</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors">
                          ZERO Touch Integration
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI-powered self-serve system enabling SME merchants to go live with payments in minutes without human intervention.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30 mb-3">#18</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                          Service Volume Trend Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI-driven analysis to identify patterns and predict service volume trends for better resource allocation.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30 mb-3">#20</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors">
                          AI-Powered Quality Tool
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Analyzing ticket quality through AI to ensure consistent, high-quality support responses.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 hover:border-green-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-green-900/50 text-green-200 border border-green-500/30 mb-3">#21</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-green-400 transition-colors">
                          AI Calling Bot
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI solution for automated outbound calls as first touchpoint and on WOC cases to reduce resolution time.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-orange-900/50 text-orange-200 border border-orange-500/30 mb-3">#23</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-orange-400 transition-colors">
                          RFP Genie
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Tool to analyze and respond to RFPs, evaluate profitability models, and generate comprehensive responses.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30 mb-3">#25</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                          Success Rate Workshop Automation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          One-click generation of comprehensive Success Rate Workshop documents with insights and recommendations.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30 mb-3">#26</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors">
                          Smart Log Analyzer
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Instantly reconstruct payment journey, pinpoint breakage, and provide actionable diagnosis from Payment ID.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 hover:border-green-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-green-900/50 text-green-200 border border-green-500/30 mb-3">#27</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-green-400 transition-colors">
                          Freshdesk Slack Bot
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Intelligent Slack bot providing instant ticket summaries and status updates for cross-team visibility.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-2xl transition-all duration-500 group">
                      <CardHeader>
                        <Badge className="bg-orange-900/50 text-orange-200 border border-orange-500/30 mb-3">#30</Badge>
                        <CardTitle className="text-lg text-white group-hover:text-orange-400 transition-colors">
                          RCA Builder
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI tool trained on internal RCA formats to help teams create complete Root Cause Analysis within 30-40 minutes.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <GradientText className="text-4xl sm:text-5xl font-bold" animate={false}>
                How It Works
              </GradientText>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              One incredible journey, multiple amazing solutions! Join forces with your BEST colleagues to tackle real business challenges.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <InteractiveCard delay={0.1}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl">👤</span>
                    Single-Track
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg leading-relaxed">One incredible journey, multiple amazing solutions!</p>
                </CardContent>
              </Card>
            </InteractiveCard>

            <InteractiveCard delay={0.2}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl">👥</span>
                    Team Power
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg leading-relaxed">2-4 members from across BEST department functions</p>
                </CardContent>
              </Card>
            </InteractiveCard>

            <InteractiveCard delay={0.3}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 hover:border-green-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl">🎯</span>
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg leading-relaxed">Choose from 23 real-time business challenges</p>
                </CardContent>
              </Card>
            </InteractiveCard>

            <InteractiveCard delay={0.4}>
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl">🏆</span>
                    Event Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg leading-relaxed">2 rounds + Finale, top 5 teams advance</p>
                </CardContent>
              </Card>
            </InteractiveCard>
          </motion.div>
        </div>
      </section>

      {/* Judging & Assessment Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <GradientText className="text-4xl sm:text-5xl font-bold" animate={false}>
                Judging & Assessment
              </GradientText>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert panel of 3 judges including at least one BEST internal leader.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 group cursor-pointer hover:shadow-2xl transition-all duration-500">
                <CardHeader className="text-center">
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Brain className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors mb-3">Innovation & AI Tool Usage</CardTitle>
                  <Badge className="w-fit mx-auto bg-blue-900/50 text-blue-200 border border-blue-500/30 text-lg px-4 py-2">
                    <AnimatedCounter end={30} />
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-base leading-relaxed">Creative solutions leveraging AI technologies</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 group cursor-pointer hover:shadow-2xl transition-all duration-500">
                <CardHeader className="text-center">
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-6"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Target className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors mb-3">Impact & Feasibility</CardTitle>
                  <Badge className="w-fit mx-auto bg-purple-900/50 text-purple-200 border border-purple-500/30 text-lg px-4 py-2">
                    <AnimatedCounter end={30} />
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-base leading-relaxed">Real-world impact and implementation potential</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 group cursor-pointer hover:shadow-2xl transition-all duration-500">
                <CardHeader className="text-center">
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Zap className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors mb-3">Technical Execution</CardTitle>
                  <Badge className="w-fit mx-auto bg-green-900/50 text-green-200 border border-green-500/30 text-lg px-4 py-2">
                    <AnimatedCounter end={25} />
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-base leading-relaxed">Quality of technical implementation</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 group cursor-pointer hover:shadow-2xl transition-all duration-500">
                <CardHeader className="text-center">
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Share2 className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors mb-3">Presentation & Storytelling</CardTitle>
                  <Badge className="w-fit mx-auto bg-orange-900/50 text-orange-200 border border-orange-500/30 text-lg px-4 py-2">
                    <AnimatedCounter end={15} />
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-base leading-relaxed">Clear communication and compelling narrative</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 to-orange-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <GradientText className="text-4xl sm:text-5xl font-bold" animate={false}>
                The Prizes
              </GradientText>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Compete for amazing rewards and see your ideas come to life.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 border-0 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500">
                <CardHeader className="text-center pb-6">
                  <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full animate-pulse"></div>
                    <span className="relative text-6xl font-bold text-white">1</span>
                  </div>
                  <CardTitle className="text-4xl text-white font-bold mb-4">Winner</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-4 text-white">
                    <li className="flex items-center justify-center gap-4">
                      <span className="text-3xl">💰</span>
                      <span className="font-semibold text-xl">₹40,000 Cash Prize</span>
                    </li>
                    <li className="flex items-center justify-center gap-4">
                      <span className="text-3xl">📜</span>
                      <span className="font-semibold text-xl">Official certificates</span>
                    </li>
                    <li className="flex items-center justify-center gap-4">
                      <span className="text-3xl">🏆</span>
                      <span className="font-semibold text-xl">Bragging rights!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 border-0 shadow-2xl hover:shadow-gray-500/25 transition-all duration-500">
                <CardHeader className="text-center pb-6">
                  <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-full animate-pulse"></div>
                    <span className="relative text-6xl font-bold text-white">2</span>
                  </div>
                  <CardTitle className="text-4xl text-white font-bold mb-4">Runner-Up</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-4 text-white">
                    <li className="flex items-center justify-center gap-4">
                      <span className="text-3xl">💰</span>
                      <span className="font-semibold text-xl">₹20,000 Cash Prize</span>
                    </li>
                    <li className="flex items-center justify-center gap-4">
                      <span className="text-3xl">📜</span>
                      <span className="font-semibold text-xl">Official certificates</span>
                    </li>
                    <li className="flex items-center justify-center gap-4">
                      <span className="text-3xl">⭐</span>
                      <span className="font-semibold text-xl">Recognition!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Guarantee Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <Lightbulb className="h-16 w-16 text-white" />
            </motion.div>
            <GradientText className="text-4xl sm:text-5xl font-bold mb-6 text-green-400" animate={false}>
              💡 Implementation Guarantee
            </GradientText>
            <p className="text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Winning solutions will be implemented within <strong className="text-green-400">2 months</strong> post-hackathon - your ideas will become reality!
            </p>
            <Badge className="bg-gradient-to-r from-green-900 to-green-800 text-green-200 text-xl px-8 py-3 border border-green-500/30">
              Real Impact
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                Ready to Get Involved?
              </h2>
            </div>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-sm">
              There&apos;s a role for everyone in making AlgoRhythm a success.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">📝</span>
                  </div>
                  <CardTitle className="text-xl text-white mb-2 font-bold">Employees</CardTitle>
                  <p className="text-gray-200 text-sm font-medium">Join the innovation revolution!</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    onClick={() => window.open('https://forms.gle/jdCXcczhZK59gqY6A', '_blank')}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold py-3 shadow-lg"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Register Here
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-pink-500/30 hover:border-pink-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white mb-2 font-bold">Stay in the Loop</CardTitle>
                  <p className="text-gray-200 text-sm font-medium">Join the Slack for updates and announcements.</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    onClick={() => window.open('https://join.slack.com/share/enQtOTQyMzAwODA3MzYyMi0zYWZlODE0MjU2MjM1ZWFiZTY0NjVlNjdmODY0MDhiODdlYjZkZmQ2Nzk5NTE0ZmMzNjAwODA2NGQ4ZTgwNjFj', '_blank')}
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800 rounded-xl font-semibold py-3 shadow-lg"
                  >
                    <Brain className="h-5 w-5 mr-2" />
                    Join Slack Channel
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white mb-2 font-bold">Brownie Points</CardTitle>
                  <p className="text-gray-200 text-sm font-medium">Share your journey!</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    onClick={() => setShowShareModal(true)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 rounded-xl font-semibold py-3 shadow-lg"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share Journey
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Social Sharing */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 text-white bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 inline-flex shadow-2xl">
              <MessageSquare className="h-6 w-6 text-blue-200" />
              <Linkedin className="h-6 w-6 text-blue-200" />
              <span className="text-lg">Share your #AlgoRhythm journey on Slack and LinkedIn for extra recognition and brownie points!</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Starts Now Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
              <GradientText className="text-4xl sm:text-5xl font-bold" animate={false}>
                The Future Starts Now
              </GradientText>
            </div>
            <p className="text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              This isn&apos;t just a hackathon - it&apos;s a launchpad for the next chapter of innovation at BEST. Your ideas today become our solutions tomorrow. Together, we&apos;re not just participating in change; we&apos;re creating it!
            </p>
            <p className="text-xl text-blue-400 mb-10 font-semibold">
              Ready to solve today&apos;s challenges for a smarter tomorrow? The rhythm of innovation starts with YOU! 🎵🤖
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-blue-900 to-blue-800 text-blue-200 px-6 py-3 text-lg border border-blue-500/30">#AlgoRhythm</Badge>
              <Badge className="bg-gradient-to-r from-purple-900 to-purple-800 text-purple-200 px-6 py-3 text-lg border border-purple-500/30">#InnovateWithAI</Badge>
              <Badge className="bg-gradient-to-r from-green-900 to-green-800 text-green-200 px-6 py-3 text-lg border border-green-500/30">#BESTSolutions</Badge>
              <Badge className="bg-gradient-to-r from-orange-900 to-orange-800 text-orange-200 px-6 py-3 text-lg border border-orange-500/30">#AIHackathon</Badge>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/30 rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Share Your AlgoRhythm Journey!</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 mb-6">
                <p className="text-gray-300 whitespace-pre-wrap text-sm">{linkedInMessage}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleCopyToClipboard}
                  className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  {copiedToClipboard ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5 mr-2" />
                      Copy to Clipboard
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleShareToLinkedIn}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Share on LinkedIn
                </Button>
              </div>

              <p className="text-center text-gray-400 text-sm mt-6">
                Earn brownie points by sharing your excitement for AlgoRhythm! 🏆
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

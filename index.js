//okay hers is where the js stuff for the app goes like the aray 

let index = Math.random();
let array  = [
  "Network Security",
  "Cloud Security",
  "Zero Trust Architecture",
  "Endpoint Detection and Response (EDR)",
  "Phishing and Social Engineering",
  "Multi-Factor Authentication (MFA)",
  "Security Information and Event Management (SIEM)",
  "Penetration Testing",
  "Vulnerability Management",
  "Cyber Threat Intelligence (CTI)",
  "Malware Analysis",
  "Insider Threats",
  "Ransomware Prevention and Response",
  "Firewalls and Intrusion Detection Systems (IDS)",
  "Data Loss Prevention (DLP)",
  "Secure Software Development (DevSecOps)",
  "Mobile Device Security",
  "Identity and Access Management (IAM)",
  "Public Key Infrastructure (PKI)",
  "Digital Forensics",
  "Security Awareness Training",
  "Risk Management Frameworks (RMF)",
  "Cybersecurity Laws and Regulations (e.g., GDPR, HIPAA)",
  "Security Operations Center (SOC)",
  "Advanced Persistent Threats (APTs)",
  "Dark Web Monitoring",
  "Cryptography and Encryption Standards",
  "Incident Response Planning",
  "Cybersecurity Audits and Compliance",
  "Wireless Network Security",
  "Security in Industrial Control Systems (ICS/SCADA)",
  "Blockchain Security",
  "Cybersecurity in Internet of Things (IoT)",
  "Application Security",
  "Secure Code Review",
  "Botnet Detection and Mitigation",
  "Web Application Firewalls (WAF)",
  "Threat Hunting",
  "Security Automation and Orchestration",
  "Business Continuity and Disaster Recovery",
  "Red Team vs Blue Team Exercises",
  "Cybersecurity Metrics and KPIs",
  "Password Management Policies",
  "Patch Management Strategies",
  "Security in Software Supply Chains",
  "DNS Security",
  "BYOD (Bring Your Own Device) Policies",
  "Threat Modeling",
  "Cybersecurity in Artificial Intelligence"
];
//grab button 
  let button = document.getElementById("generate")
  let result = document.getElementById("result")// this looks like an element tag 

  //now put in action 
button.addEventListener("click",()=>{
    let index = Math.floor(Math.random() * array.length)
    result.textContent = array[index];

})
console.log(index)
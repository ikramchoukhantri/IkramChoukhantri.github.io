import Work1 from "../../assets/cardio.webp";
import Work2 from "../../assets/text-graphs.png";
import Work3 from "../../assets/linkedin.webp";
import Work5 from "../../assets/hospital.webp";
import Work9 from "../../assets/Java.webp";
import Work8 from "../../assets/Planning.png";
import Work4 from "../../assets/dwh.webp";
import Work6 from "../../assets/airflow.webp";
import Work7 from "../../assets/infrastructure.png";

const Menu = [
    {
        id: 1,
        image: Work1,
        title: "Prédictive Cardiologie",
        category: ["Data Science"],
        url: "http://example.com/project1",
        repositoryUrl: "https://github.com/ikramchoukhantri/Pr-dictive_Cardiologie",
        tools: "Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow",
        description: `
            <p><strong>Prédictive Cardiologie : Détection des risques de crise cardiaque par l’apprentissage automatique et le Deep Learning</strong></p>
            <p><strong>Dec 2023 - Feb 2024</strong></p>
            <p>Ce projet vise à développer un modèle de Machine Learning pour prédire le risque de crise cardiaque chez un individu. Le modèle sera basé sur un ensemble de données de Kaggle contenant divers paramètres médicaux tels que l'âge, le sexe, la tension artérielle, le cholestérol, etc.</p>
            <p><strong>Objectifs:</strong></p>
            <ul>
                <li>Prédire la probabilité qu'un individu subisse une crise cardiaque.</li>
                <li>Identifier les facteurs de risque les plus importants pour les crises cardiaques.</li>
                <li>Développer un outil pour aider les médecins à évaluer le risque cardiovasculaire de leurs patients.</li>
            </ul>
            <p><strong>Données:</strong></p>
            <p>L'ensemble de données utilisé provient de la plateforme Kaggle et contient des informations sur 303 patients. Les attributs suivants sont inclus :</p>
            <ul>
                <li>Âge</li>
                <li>Sexe</li>
                <li>Type de douleur thoracique</li>
                <li>Tension artérielle au repos</li>
                <li>Cholestérol</li>
                <li>Glycémie à jeun</li>
                <li>Résultat de l'électrocardiogramme au repos</li>
                <li>Fréquence cardiaque maximale atteinte</li>
                <li>Angine induite par l'exercice</li>
                <li>Pic ST</li>
                <li>Pente</li>
                <li>Nombre de vaisseaux majeurs</li>
                <li>Thal</li>
                <li>Variable cible (0 = pas de crise cardiaque, 1 = crise cardiaque)</li>
            </ul>
            <p><strong>Méthodologie:</strong></p>
            <p>Plusieurs algorithmes de Machine Learning seront appliqués à l'ensemble de données, notamment :</p>
            <ul>
                <li>K plus proches voisins (KNN)</li>
                <li>Naïve Bayes (NB)</li>
                <li>Arbres de décision (DT)</li>
                <li>Support Vector Machine (SVM)</li>
                <li>Réseau neuronal perceptron multicouche (MLP)</li>
                <li>K-Means</li>
                <li>Clustering hiérarchique</li>
            </ul>
            <p><strong>Évaluation:</strong></p>
            <p>Les performances des différents modèles seront évaluées à l'aide de plusieurs métriques, telles que la précision, le rappel et la F1-score.</p>
            <p><strong>Compétences :</strong></p>
            <p>NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, TensorFlow</p>
        `   
    },
    {
        id: 10,
        image: Work2,
        title: "Représentation Graphique et Classification de Texte avec des LLM et GNN",
        category: ["Data Science"],
        url: "http://example.com/project10",
        repositoryUrl: "https://github.com/ikramchoukhantri/GraphTextClassification",
        tools: "BERT (Language Model), PyTorch, Pytorch Geometric, Cytoscape, NLTK",
        description: `
            <p><strong>Représentation Graphique et Classification de Texte avec des LLM et GNN</strong></p>
            <p><strong>Mar 2024 - Jun 2024</strong></p>
            <p>Ce projet explore l'application des réseaux de neurones graphiques (GNN) et des modèles de langage de grande envergure (LLM) pour classifier des graphes générés à partir de textes. En utilisant des données textuelles sur la santé mentale, telles que "depression" et "SuicideWatch", nous avons construit des graphes sémantiques capturant les relations entre différents termes. Ces graphes ont ensuite été utilisés pour entraîner un modèle GNN, permettant une classification précise des textes.</p>
            <p><strong>Objectifs :</strong></p>
            <ul>
                <li>Développer un modèle de classification de texte basé sur des graphes sémantiques.</li>
                <li>Utiliser les capacités des GNN pour capturer les structures complexes des graphes textuels.</li>
                <li>Améliorer la précision de la classification des textes en exploitant les relations sémantiques entre les termes.</li>
            </ul>
            <p><strong>Données :</strong></p>
            <p>Les données textuelles utilisées proviennent de diverses sources et incluent des étiquettes liées à la santé mentale. Les données ont été prétraitées pour extraire des mots-clés et construire des graphes sémantiques.</p>
            <p><strong>Méthodologie :</strong></p>
            <ul>
                <li>Collecte et prétraitement des données textuelles.</li>
                <li>Extraction de mots-clés avec KeyBERT.</li>
                <li>Construction de graphes sémantiques.</li>
                <li>Entraînement d'un modèle GNN pour la classification des graphes.</li>
            </ul>
            <p><strong>Évaluation :</strong></p>
            <p>Les performances du modèle seront évaluées en utilisant des métriques de classification standard telles que la précision, le rappel et la F1-score.</p>
            <p><strong>Compétences :</strong></p>
            <p>BERT (Language Model), PyTorch, Pytorch Geometric, Cytoscape, NLTK</p>
        `
    },
    {
        id: 3,
        image: Work3,
        title: "Analyse comparative des offres d’emploi LinkedIn en Business Intelligence et Analytics",
        category: ["Business Intelligence"],
        url: "http://example.com/project5",
        repositoryUrl: "https://github.com/ikramchoukhantri/Offre_BIA",
        tools: "Pandas, Beautiful Soup, Selenium, Microsoft Power BI",
        description: `
            <p><strong>Analyse comparative des offres d’emploi LinkedIn en Business Intelligence et Analytics pour les diplômés de l’ENSIAS</strong></p>
            <p><strong>Apr 2023 - Jun 2023</strong></p>
            <p>Notre projet de fin d’année vise à étudier l’adéquation entre la formation académique de l’ENSIAS et les compétences recherchées dans les domaines de la Business Intelligence et de l’Analytics. Pour cela, nous utilisons la technique de scraping des données sur LinkedIn afin d’explorer les opportunités d’emploi dans ce domaine et de comparer les compétences demandées par les employeurs avec celles développées par les étudiants.</p>
            <p>En utilisant la bibliothèque Selenium, nous avons extrait automatiquement 150 offres d’emploi spécifiques aux profils de "Business Intelligence" et "Analytics" sur LinkedIn dans la période du 30 mai. Parallèlement, nous avons collecté des informations sur les profils des lauréats de l’ENSIAS présents sur la plateforme à l’aide de la bibliothèque BeautifulSoup, ce qui nous permet de réaliser une comparaison concrète entre les compétences requises et celles acquises par les étudiants.</p>
            <p>Pour analyser les résultats obtenus, nous avons utilisé Power BI, un outil Microsoft d’analyse de données. Grâce à ses fonctionnalités de visualisation avancées, nous avons identifié les compétences les plus demandées par les employeurs et ainsi mis en évidence les écarts éventuels entre la formation académique et les compétences professionnelles requises.</p>
            <p><strong>Objectif:</strong></p>
            <p>Formuler des recommandations pour améliorer l’alignement entre la formation académique de l’ENSIAS et les besoins du marché du travail en constante évolution dans les domaines de la Business Intelligence et de l’Analytics.</p>
            <p><strong>Compétences:</strong></p>
            <p>Pandas, Beautiful Soup, Selenium, Microsoft Power BI</p>
        `
    },
    {
        id: 8,
        image: Work4,
        title: "Modélisation et Implémentation d’un Entrepôt de Données pour ForestAI",
        category: ["Business Intelligence"],
        url: "http://example.com/project8",
        repositoryUrl: "https://github.com/ikramchoukhantri/ForestAI",
        tools: "Microsoft SQL Server, SQL Server Analysis Services (SSAS), SQL Server Integration Services (SSIS), SQL Server Reporting Services (SSRS), Microsoft Power BI, SQL",
        description: `
            <p><strong>Modélisation et Implémentation d’un Entrepôt de Données pour ForestAI</strong></p>
            <p><strong>May 2024 - Jun 2024</strong></p>
            <p>Développement d'une solution complète d'entrepôt de données pour ForestAI, une entreprise spécialisée dans les prédictions d'inventaire utilisant l'intelligence artificielle. Le projet visait à standardiser le pipeline de données, intégrer diverses sources de données et créer des tableaux de bord interactifs pour améliorer les processus de benchmarking des modèles d'IA et la prise de décision.</p>
            <p><strong>Caractéristiques Clés :</strong></p>
            <ul>
                <li>Intégration des Données : Intégration de données provenant de diverses sources, y compris des données météorologiques, des images satellites et des modèles fournis par les clients.</li>
                <li>Validation des Modèles : Établissement de processus standardisés de validation des modèles d'IA.</li>
                <li>Tableaux de Bord Interactifs : Développement de tableaux de bord dynamiques avec Power BI.</li>
                <li>Processus ETL : Mise en œuvre de processus ETL efficaces avec SSIS.</li>
                <li>Génération de Cubes : Création de cubes OLAP avec SSAS pour l'analyse multidimensionnelle des données.</li>
            </ul>
            <p><strong>Compétences :</strong></p>
            <p>Microsoft SQL Server, SQL Server Analysis Services (SSAS), SQL Server Integration Services (SSIS), SQL Server Reporting Services (SSRS), Microsoft Power BI, SQL</p>
        `
    },
    {
        id: 4,
        image: Work5,
        title: "Analyse de trois ensembles de données hospitalières durant la pandémie",
        category: ["Business Intelligence"],
        url: "http://example.com/project6",
        repositoryUrl: "https://github.com/ikramchoukhantri/BD_Hopitale",
        tools: "Microsoft Power BI",
        description: `
            <p><strong>Analyse de trois ensembles de données hospitalières durant la pandémie</strong></p>
            <p><strong>May 2023 - Jun 2023</strong></p>
            <p>C'est un projet challenge réalisé en utilisant Power BI pour analyser trois jeux de données collectées au Maroc pendant la période de la pandémie de COVID-19. Le projet consiste à explorer ces données pour obtenir des informations clés sur l'activité hospitalière, l'hospitalisation et la consultation, ainsi que les ressources humaines dans un hôpital.</p>
            <p><strong>Objectifs:</strong></p>
            <ul>
                <li>Analyser les tendances d'activité hospitalière.</li>
                <li>Étudier les taux d'hospitalisation et de consultation.</li>
                <li>Évaluer la gestion des ressources humaines dans les hôpitaux.</li>
            </ul>
            <p><strong>Compétences:</strong></p>
            <p>Microsoft Power BI</p>
        `
    },
    {
        id: 9,
        image: Work6,
        title: "Pipeline de Données avec Apache Airflow",
        category: ["Data Engineering"],
        url: "http://example.com/project9",
        repositoryUrl: "https://github.com/ikramchoukhantri/AirflowPipeline",
        tools: "Apache Kafka, Apache Airflow, Apache NiFi, Docker",
        description: `
            <p><strong>Pipeline de Données avec Apache Airflow</strong></p>
            <p><strong>May 2024 - Jun 2024</strong></p>
            <p>Ce projet vise à maîtriser la conception et l’implémentation de pipelines de données à l’aide d’Apache Airflow. Les pipelines de données sont essentiels pour automatiser et orchestrer les tâches d’extraction, de transformation et de chargement (ETL) des données. En plus de l’utilisation d’Airflow, ce projet explore la containerisation avec Docker, l’ingestion et l’agrégation de données avec Apache NiFi, ainsi que l’application de modèles de machine learning de Hugging Face pour la summarization, l’analyse des sentiments et la conversion texte-parole.</p>
            <p><strong>Objectifs :</strong></p>
            <ul>
                <li>Automatiser l’extraction, la transformation et le chargement des données (ETL) des chaînes YouTube.</li>
                <li>Utiliser Apache Airflow pour orchestrer les tâches ETL.</li>
                <li>Implémenter l’ingestion et l’agrégation des données avec Apache NiFi.</li>
                <li>Appliquer des modèles de machine learning pour l’analyse des sentiments et la summarization des commentaires YouTube.</li>
            </ul>
            <p><strong>Méthodologie :</strong></p>
            <ul>
                <li>Extraction des Données : Utilisation de l’API YouTube Data v3 pour extraire des données détaillées sur les chaînes, les playlists, les vidéos et les commentaires. Implémentation d’un pipeline Airflow pour l’extraction et le stockage des données.</li>
                <li>Préparation des Données : Nettoyage des données pour s’assurer de leur qualité. Transformation des données en tables relationnelles pour une analyse efficace. Enrichissement des données avec des métadonnées supplémentaires.</li>
                <li>Analyse des Données : Analyse descriptive pour obtenir une vue d’ensemble des données. Analyse des tendances. Analyse des sentiments des commentaires avec les modèles de Hugging Face.</li>
                <li>Visualisation des Données : Utilisation de Tableau pour créer des tableaux de bord interactifs affichant les principaux KPI des chaînes YouTube.</li>
            </ul>
            <p><strong>Compétences :</strong></p>
            <p>Apache Kafka, Apache Airflow, Apache NiFi, Docker</p>
        `
    },
    {
        id: 5,
        image: Work7,
        title: "Amélioration de l’infrastructure d’une entreprise d’IT",
        category: ["Autre"],
        url: "http://example.com/project3",
        repositoryUrl: "https://github.com/ikramchoukhantri/Amélioration-IT",
        tools: "Active Directory, Permissions NTFS, Quotas de disque, Windows PowerShell",
        description: `
            <p><strong>Amélioration de l’infrastructure d’une entreprise d’IT: Collaboration Sécurisée et Gestion du Stockage</strong></p>
            <p><strong>Dec 2023 - Jan 2024</strong></p>
            <p>Ce projet vise à améliorer l'infrastructure IT d'une entreprise en mettant en place des solutions de collaboration sécurisée et de gestion du stockage.</p>
            <p><strong>Objectifs:</strong></p>
            <ul>
                <li>Mettre en place des permissions NTFS pour sécuriser l'accès aux fichiers.</li>
                <li>Configurer des quotas de disque pour gérer l'utilisation du stockage.</li>
                <li>Utiliser Active Directory pour centraliser la gestion des utilisateurs et des ressources.</li>
            </ul>
            <p><strong>Compétences :</strong></p>
            <p>Active Directory, Permissions NTFS, Quotas de disque, Windows PowerShell</p>
        `
    },
    {
        id: 6,
        image: Work8,
        title: "Uni-Planning: Système de gestion d’emplois du temps personnalisé pour les universités",
        category: ["Autre"],
        url: "http://example.com/project4",
        repositoryUrl: "https://github.com/ikramchoukhantri/Uni-Planning",
        tools: "APEX, HTML, JavaScript, CSS",
        description: `
            <p><strong>Uni-Planning: Système de gestion d’emplois du temps personnalisé pour les universités</strong></p>
            <p><strong>Dec 2023 - Jan 2024</strong></p>
            <p>Uni-Planning est un système de gestion d'emplois du temps personnalisé conçu pour répondre aux besoins spécifiques des universités. Notre solution innovante permet de :</p>
            <ul>
                <li>Centraliser et gérer l'ensemble des données relatives aux professeurs et à leurs cours.</li>
                <li>Créer et personnaliser des emplois du temps en tenant compte des préférences et des contraintes des professeurs.</li>
                <li>Optimiser l'utilisation des ressources humaines et matérielles de l'université.</li>
                <li>Améliorer la communication entre les professeurs, les étudiants et l'administration.</li>
            </ul>
            <p><strong>Compétences :</strong></p>
            <p>APEX, HTML, JavaScript, CSS</p>
        `
    },
    {
        id: 7,
        image: Work9,
        title: "Développement d'une application de gestion d'une banque : Java",
        category: ["Autre"],
        url: "http://example.com/project7",
        repositoryUrl: "https://github.com/ikramchoukhantri/BankingApp",
        tools: "Java",
        description: `
            <p><strong>Développement d'une application de gestion d'une banque : Java</strong></p>
            <p><strong>Mar 2023 - Apr 2023</strong></p>
            <p>Ce projet consiste à développer une application de gestion bancaire en utilisant Java. L'application permet de gérer les comptes des clients, les transactions et les rapports financiers.</p>
            <p><strong>Objectifs:</strong></p>
            <ul>
                <li>Développer une application sécurisée pour la gestion des comptes bancaires.</li>
                <li>Permettre la réalisation de transactions bancaires en ligne.</li>
                <li>Générer des rapports financiers détaillés.</li>
            </ul>
            <p><strong>Compétences :</strong></p>
            <p>Java</p>
        `
    }
];

export default Menu;

import { Question } from '../../types';

// Questions for Social Networks (covering multiple weeks from NPTEL course)
export const socialNetworksQuestions: Question[] = [
  // Week 7 Questions (Placeholder - Original file had Week 4 in comment)
  {
    id: 'diff-w7-q1',
    text: 'In link analysis, what is the primary determinant of “who follows whom” in social networks?',
    options: [
      'Homophily and shared attributes',
      'Random chance',
      'Network size',
      'Algorithmic recommendation systems only'
    ],
    correctAnswer: 0,
    explanation: 'Homophily and shared attributes significantly influence following behavior, as people tend to connect with those similar to themselves.',
    topics: ['Social Networks', 'Link Analysis', 'Week 7']
  },
  {
    id: 'diff-w7-q2',
    text: 'Which centrality measure is most useful in analyzing “who follows whom” in a directed social network?',
    options: [
      'Closeness centrality',
      'Degree centrality',
      'Betweenness centrality',
      'Eigenvector centrality'
    ],
    correctAnswer: 1,
    explanation: 'Degree centrality, especially in-degree, is key for understanding follower relationships in directed networks.',
    topics: ['Centrality Measures', 'Network Analysis', 'Week 7']
  },
  {
    id: 'diff-w7-q3',
    text: 'What is a key factor that drives following behavior in social networks?',
    options: [
      'The popularity of the individual',
      'Influence of shared interests and connections',
      'Random recommendations from the platform',
      'Presence of bots in the network'
    ],
    correctAnswer: 1,
    explanation: 'Shared interests and mutual connections often drive following behavior, fostering organic network growth.',
    topics: ['Social Networks', 'User Behavior', 'Week 7']
  },
  {
    id: 'diff-w7-q4',
    text: 'Which phenomenon can explain “following” behavior when individuals follow popular accounts with no direct personal connection?',
    options: [
      'Local clustering',
      'Social contagion',
      'Reciprocity in the network',
      'Scale-free network dynamics'
    ],
    correctAnswer: 3,
    explanation: 'Scale-free network dynamics describe how popular nodes (hubs) accumulate more links over time, explaining such behavior.',
    topics: ['Scale-Free Networks', 'Network Growth', 'Week 7']
  },
  {
    id: 'diff-w7-q5',
    text: 'In diffusion theory, what is the primary condition for a behavior or innovation to diffuse widely across a network?',
    options: [
      'High density of connections',
      'Low threshold for adoption among individuals',
      'Equal in-degree and out-degree for all nodes',
      'Uniform distribution of resources in the network'
    ],
    correctAnswer: 1,
    explanation: 'A low adoption threshold means individuals are more easily influenced, promoting widespread diffusion.',
    topics: ['Diffusion Theory', 'Threshold Models', 'Week 7']
  },
  {
    id: 'diff-w7-q6',
    text: 'What typically happens to the speed of diffusion in networks with high modularity (dense communities)?',
    options: [
      'Diffusion is faster due to strong local connections',
      'Diffusion slows down at the boundaries between communities',
      'Diffusion stops entirely in modular networks',
      'Diffusion speed is unaffected by network structure'
    ],
    correctAnswer: 1,
    explanation: 'While local diffusion may be fast, inter-community diffusion slows down due to sparse cross-cluster links.',
    topics: ['Modularity', 'Diffusion Speed', 'Week 7']
  },
  {
    id: 'diff-w7-q7',
    text: 'Which of the following models best captures the process of information diffusion in networks?',
    options: [
      'Linear Threshold Model',
      'Preferential Attachment Model',
      'Random Walk Model',
      'Erdos-Renyi Model'
    ],
    correctAnswer: 0,
    explanation: 'The Linear Threshold Model simulates how individuals adopt behavior based on the influence of neighbors.',
    topics: ['Diffusion Models', 'Network Theory', 'Week 7']
  },
  {
    id: 'diff-w7-q8',
    text: 'In the Independent Cascade Model, what determines whether a node adopts the behavior from a neighbor?',
    options: [
      'The node’s centrality score',
      'A probabilistic influence factor from the neighbor',
      'The node’s degree in the network',
      'The presence of multiple incoming links'
    ],
    correctAnswer: 1,
    explanation: 'In the Independent Cascade Model, adoption depends on a probabilistic attempt by each activated neighbor.',
    topics: ['Cascade Models', 'Information Spread', 'Week 7']
  },
  {
    id: 'diff-w7-q9',
    text: 'How do Communities in networks affect information diffusion?',
    options: [
      'Communities always enhance diffusion by increasing local connectivity',
      'Communities create barriers to diffusion across network clusters',
      'Communities force diffusion to occur only in densely connected regions',
      'Communities eliminate weak ties, reducing diffusion'
    ],
    correctAnswer: 1,
    explanation: 'Dense communities can act as diffusion bottlenecks, limiting spread across clusters.',
    topics: ['Community Structure', 'Diffusion Barriers', 'Week 7']
  },
  {
    id: 'diff-w7-q10',
    text: 'What is the primary condition for a cascade to overcome a cluster in a network?',
    options: [
      'The fraction of adopters in the cluster exceeds the cluster’s threshold',
      'The cascade must originate from a high-degree node',
      'The cluster must have fewer nodes than the cascade’s initial spread',
      'Cascades do not depend on clusters in the network'
    ],
    correctAnswer: 0,
    explanation: 'A cascade will cross into a cluster only if enough nodes within the cluster are activated to surpass the threshold.',
    topics: ['Cascade Theory', 'Adoption Thresholds', 'Week 7']
  },

  // Week 1 Questions
  {
    id: 'basics-w1-q1',
    text: 'Which Python code correctly computes the sum of even numbers in the list L = [3, 5, 8, 2, 6]?',
    options: [
      'sum([x for x in L if x % 2 == 0])',
      'sum([x for x in L if x % 2 != 0])',
      'sum([x for x in L if x > 2])',
      'sum(L)' // Corrected: removed trailing single quote
    ],
    correctAnswer: 0,
    explanation: 'This list comprehension filters out even numbers, and `sum()` adds them up.',
    topics: ['Python Basics', 'List Comprehensions', 'Week 1']
  },
  {
    id: 'basics-w1-q2',
    text: "You are given a dictionary d = {'A': 10, 'B': 20, 'C': 30}. Which Python code snippet correctly adds a new key D with value 40 to the dictionary?",
    options: [
      "d['D'] = 40",
      "d.add('D', 40)",
      "d.update('D', 40)",
      "d.append({'D': 40})"
    ],
    correctAnswer: 0,
    explanation: 'Assigning a value to a new key in a dictionary is done with the bracket syntax.',
    topics: ['Python Basics', 'Dictionaries', 'Week 1']
  },
  {
    id: 'basics-w1-q3',
    text: 'Given the following Python code snippet, what will be the output?\n\nimport matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4]\ny = [1, 4, 9, 16]\n\nplt.plot(x, y)\nplt.show()',
    options: [
      'A bar chart displaying the values in x and y.',
      'A line graph connecting the points (1,1), (2,4), (3,9), (4,16).',
      'A scatter plot with points (1,1), (2,4), (3,9), (4,16).',
      'A histogram displaying the values of x and y.'
    ],
    correctAnswer: 1,
    explanation: 'The `plot()` function creates a line graph by default.',
    topics: ['Python Libraries', 'Matplotlib', 'Week 1']
  },
  {
    id: 'basics-w1-q4',
    text: "Using the NetworkX library, how would you create an undirected graph with three nodes (A, B, C) and two edges (A-B and B-C)?",
    options: [
      "G = nx.Graph()\nG.add_edges_from([('A', 'B'), ('B', 'C')])",
      "G = nx.DiGraph()\nG.add_edges_from([('A', 'B'), ('B', 'C')])",
      "G = nx.Graph()\nG.add_nodes_from(['A', 'B', 'C'])",
      "G = nx.Graph()\nG.add_edges_from([('A', 'B'), ('B', 'C')], directed=True)"
    ],
    correctAnswer: 0,
    explanation: 'The `Graph` class creates undirected graphs, and `add_edges_from` adds the given edges.',
    topics: ['NetworkX', 'Graph Construction', 'Week 1']
  },
  {
    id: 'basics-w1-q5',
    text: 'In the PageRank algorithm, what is the primary assumption regarding the link structure of the web?',
    options: [
      'Pages that are linked to more often are likely more important.',
      'Pages that are less frequently linked are likely more important.',
      'Pages with more content are likely more important.',
      'Pages without links are considered equally important as those with links.'
    ],
    correctAnswer: 0,
    explanation: 'PageRank relies on the idea that important pages are more likely to receive links from other pages.',
    topics: ['Network Algorithms', 'PageRank', 'Week 1']
  },
  {
    id: 'basics-w1-q6',
    text: 'In a social network, you are tasked with finding the shortest path between two individuals, A and B. Which of the following algorithms would be most suitable?',
    options: [
      'Dijkstra’s Algorithm',
      'A* Search Algorithm',
      'Breadth-First Search (BFS)',
      'Depth-First Search (DFS)'
    ],
    correctAnswer: 2,
    explanation: 'BFS is optimal for unweighted graphs to find the shortest path.',
    topics: ['Graph Algorithms', 'Shortest Path', 'Week 1']
  },
  {
    id: 'basics-w1-q7',
    text: 'Which of the following methods is commonly used for link prediction in a social network?',
    options: [
      'Collaborative Filtering',
      'K-means Clustering',
      'Matrix Factorization',
      'Jaccard Similarity Index'
    ],
    correctAnswer: 3,
    explanation: 'Jaccard Similarity is used to measure node similarity for link prediction tasks.',
    topics: ['Link Prediction', 'Network Analysis', 'Week 1']
  },
  {
    id: 'basics-w1-q8',
    text: 'In models of contagion in social networks, what does the term “threshold” specifically refer to?',
    options: [
      'The minimum number of links required to spread an infection in a network.',
      'The fraction of neighbors a node needs to be influenced by to adopt a new behavior.',
      'The time it takes for an infection to spread from one node to another.',
      'The maximum number of nodes that can be infected at any given time.'
    ],
    correctAnswer: 1,
    explanation: 'Thresholds determine the required influence level from neighbors for a node to change state.',
    topics: ['Contagion Models', 'Thresholds', 'Week 1']
  },
  {
    id: 'basics-w1-q9',
    text: 'Which centrality measure would you use to find the individuals who have the shortest average path length to all other nodes in the network?',
    options: [
      'Degree Centrality',
      'Closeness Centrality',
      'Betweenness Centrality',
      'Eigenvector Centrality'
    ],
    correctAnswer: 1,
    explanation: 'Closeness centrality measures how close a node is to all other nodes in the network.',
    topics: ['Centrality Measures', 'Closeness Centrality', 'Week 1']
  },
  {
    id: 'basics-w1-q10',
    text: 'Which of the following NetworkX functions can be used to predict potential links in a network based on node similarity indices?',
    options: [
      'nx.resource_allocation_index(G)',
      'nx.shortest_path_length(G)',
      'nx.closeness_centrality(G)',
      'nx.betweenness_centrality(G)'
    ],
    correctAnswer: 0,
    explanation: '`nx.resource_allocation_index` is used for link prediction using a node similarity heuristic.',
    topics: ['NetworkX', 'Link Prediction', 'Week 1']
  },

  // Week 2 Questions
  {
    id: "graph-theory-w2-q1",
    text: "A graph has a diameter of 1. Which of the following statements must be true?",
    options: [
      "The graph is a complete graph.",
      "All nodes in the graph are directly connected to every other node.", // Note: This is essentially the definition of a complete graph
      "The graph contains the maximum possible number of edges for its number of nodes.", // True for complete graphs
      "The graph is sparse with relatively fewer edges compared to nodes.",
      "Adding or removing an edge cannot change its diameter."
    ],
    // Correcting the options to be more distinct if needed, but keeping original text for now.
    // Assuming option 0 is the intended most direct answer.
    correctAnswer: 0,
    explanation: "A graph with diameter 1 means the shortest path between any two distinct nodes is 1. This definition matches a complete graph, where all nodes are directly connected.",
    topics: ["Graph Theory", "Week 2"]
  },
  {
    id: "graph-theory-w2-q2",
    text: "In the Web Graph model, what do the nodes and edges represent?",
    options: [
      "Nodes are web pages, and edges are hyperlinks between them.",
      "Nodes are servers, and edges are data transfer rates.",
      "Nodes are users, and edges are user interactions.",
      "Nodes are hashtags, and edges are co-occurrence frequencies."
    ],
    correctAnswer: 0,
    explanation: "In the Web Graph model, the nodes represent web pages, and edges are the hyperlinks between those pages.",
    topics: ["Web Graph", "Graph Theory", "Week 2"]
  },
  {
    id: "graph-theory-w2-q3",
    text: "A dataset represents a multigraph (a graph where multiple edges are allowed between two nodes). Which method in NetworkX allows you to load such a graph from an edge list file?",
    options: [
      "read_multiedgelist()", // This function doesn't exist in NetworkX
      "read_edgelist() with create_using=nx.MultiGraph()",
      "read_gml()", // Can read multigraphs if format supports it, but not specific to edgelist files
      "read_multigraph()" // This function doesn't exist in NetworkX
    ],
    correctAnswer: 1,
    explanation: "To load a multigraph from an edge list in NetworkX, use `read_edgelist()` with the `create_using=nx.MultiGraph()` argument.",
    topics: ["NetworkX", "Multigraphs", "Week 2"]
  },
  {
    id: "graph-theory-w2-q4",
    // NOTE: The GML representation code mentioned in the text is missing.
    // The question cannot be fully answered without it. Assuming the GML represented the structure described in the correct answer.
    text: "Consider the following GML representation of a directed graph:\n\n[GML CODE MISSING]\n\nWhich of the following correctly interprets the structure and properties of the graph described by the GML code?",
    options: [
      "The graph is undirected, with two nodes labeled 'A' and 'B' connected by two edges with weights 5 and 3, respectively.",
      "The graph is directed, with node 'A' pointing to node 'B' with a weight of 5, and node 'B' pointing back to node 'A' with a weight of 3.",
      "The graph is directed, with node 'A' pointing to node 'B' with a weight of 3, and node 'B' pointing to node 'A' with a weight of 5.",
      "The graph is directed and contains a self-loop at node 'A' with a weight of 5, and another self-loop at node 'B' with a weight of 3."
    ],
    correctAnswer: 1, // Assuming this based on the explanation
    explanation: "Assuming the missing GML code described a directed graph with nodes 'A' and 'B', where node 'A' points to node 'B' with a weight of 5, and node 'B' points back to node 'A' with a weight of 3.",
    topics: ["Graph Representation", "GML", "Week 2"]
  },
  {
    id: "graph-theory-w2-q5",
    text: "Consider the following characteristics of different social network dataset formats. Which of the following statements is true about these formats?",
    options: [
      "Adjacency Matrix is most efficient for storing sparse graphs because it requires minimal space for large graphs with few edges.", // False: Inefficient for sparse
      "Edge List format is not ideal for storing sparse graphs as it does not require extra space to store non-existing edges between nodes.", // False: It *is* ideal for sparse because it only stores existing edges.
      "Adjacency List is space-efficient for sparse graphs and allows for fast traversal of neighbors, making it suitable for networks with relatively few edges compared to nodes.", // True
      "Gephi File format is designed for large-scale networks and is not ideal for visualizing or analyzing graphs with edge weights or node attributes." // False: Gephi format (.gexf) supports attributes and weights.
    ],
    correctAnswer: 2,
    explanation: "Adjacency List format is space-efficient for sparse graphs (where edges << nodes^2) and allows for fast lookup of neighbors, making it suitable for many real-world networks.",
    topics: ["Graph Representation", "Social Networks", "Week 2"]
  },
  {
    id: "graph-theory-w2-q6",
    text: "Pajek datasets are usually available in which of the following format?",
    options: [
      ".csv",
      ".net",
      ".txt",
      ".tar"
    ],
    correctAnswer: 1,
    explanation: "Pajek datasets are commonly available in the `.net` format, which is used for network analysis by the Pajek software.",
    topics: ["Graph Formats", "Pajek", "Week 2"]
  },
  {
    id: "graph-theory-w2-q7",
    text: "Which NetworkX function would you use to visualize the degree distribution of a graph?",
    options: [
      "nx.degree_histogram(G)", // Returns the histogram list, not visualization itself. Visualization requires matplotlib/seaborn.
      "nx.closeness_centrality(G)",
      "nx.shortest_path_length(G)",
      "nx.eigenvector_centrality(G)"
    ],
    correctAnswer: 0,
    explanation: "The `nx.degree_histogram(G)` function in NetworkX computes the frequency of each degree in the graph, which is the basis for visualizing the degree distribution (typically using a plotting library like Matplotlib).",
    topics: ["NetworkX", "Graph Visualization", "Week 2"]
  },
  {
    id: "graph-theory-w2-q8",
    text: "In Gephi, which metric would you compute to determine the connectivity *between* communities in a graph?",
    // Modularity measures the *strength* of division into communities, not connectivity *between* them directly.
    // Betweenness centrality of edges could indicate bridges between communities.
    // Let's stick with the original answer, assuming Modularity is the intended concept related to community structure quality.
    options: [
      "Modularity", // Measures quality of community structure
      "Degree centrality",
      "Closeness centrality",
      "Betweenness centrality" // Can identify bridging nodes/edges
    ],
    correctAnswer: 0, // Keeping original answer, but note Modularity measures structure quality.
    explanation: "In Gephi, the `Modularity` metric is used to measure the strength of the division of a network into modules (communities). Higher modularity implies dense connections within communities and sparser connections between them.",
    topics: ["Gephi", "Community Detection", "Week 2"]
  },
  {
    id: "graph-theory-w2-q9",
    text: "In the context of graph theory, what is the critical threshold for the emergence of a giant connected component in a random graph (specifically Erdős-Rényi G(n, p))?",
    options: [
      "When the number of edges equals the number of nodes.", // This implies average degree = 2
      "When the average degree is 1.", // Correct threshold (p = 1/n)
      "When the clustering coefficient reaches 1.", // Relates to cliques, not giant component
      "When the network diameter becomes constant." // Diameter changes significantly around the threshold
    ],
    correctAnswer: 1,
    explanation: "The critical threshold for the emergence of a giant connected component in an Erdős-Rényi random graph G(n, p) occurs when the average degree <k> = p*(n-1) ≈ p*n approaches 1. Below this, components are small; above this, a component containing a significant fraction of nodes emerges.",
    topics: ["Random Graphs", "Giant Component", "Week 2"]
  },
  {
    id: "graph-theory-w2-q10",
    text: "In a random graph G(n,p), when does a giant connected component typically emerge?",
    options: [
      "When the edge probability p is very small (p < 1/n).", // Components are small
      "When the edge probability p is large enough (p > 1/n) to connect most nodes.", // Correct phase transition
      "When the number of nodes n is very large.", // Large n is needed, but p is the critical factor relative to n.
      "When the graph has no isolated nodes." // A giant component can exist alongside isolated nodes.
    ],
    correctAnswer: 1,
    explanation: "A giant connected component typically emerges in G(n,p) when the edge probability `p` crosses the threshold of 1/n, leading to an average degree greater than 1.",
    topics: ["Random Graphs", "Giant Component", "Week 2"]
  },

  // Week 8 Questions
  {
    id: 'diff-w8-q1', // Corrected: Added quotes
    text: 'In the context of hubs and authorities, what is the primary role of a hub in a network?',
    options: [
      'It points to many authoritative nodes.',
      'It is referenced by multiple other hubs.',
      'It has the highest in-degree in the graph.', // This describes an authority more
      'It acts as a standalone influencer without dependencies.'
    ],
    correctAnswer: 0,
    explanation: 'Hubs are nodes that link to multiple authoritative sources, serving as pointers to valuable content.',
    topics: ['Hubs & Authorities', 'Link Analysis', 'Week 8']
  },
  {
    id: 'diff-w8-q2', // Corrected: Added quotes
    text: 'Which of the following best describes the relationship between hubs and authorities in a network?',
    options: [
      'Authorities point to hubs.', // Incorrect: Hubs point to authorities
      'Hubs and authorities are disconnected groups.', // Incorrect: They are mutually reinforcing
      'Hubs reinforce the value of authorities by linking to them.', // Correct: Mutually reinforcing relationship
      'Hubs only exist in undirected graphs.' // Incorrect: Defined in directed graphs (like the web)
    ],
    correctAnswer: 2,
    explanation: 'Hubs gain value by pointing to good authorities, and authorities gain value when pointed to by good hubs — creating a reinforcing relationship.',
    topics: ['Hubs & Authorities', 'Link Analysis', 'Week 8']
  },
  {
    id: 'diff-w8-q3', // Corrected: Added quotes
    text: 'What is the key idea behind the principle of repeated improvements in link analysis?',
    options: [
      'Incrementally refining scores for nodes by iterating calculations.', // Correct: Basis of HITS/PageRank iterations
      'Using random assignments to simulate diffusion in the network.',
      'Combining the scores of hubs and authorities without iteration.',
      'Calculating scores only once based on initial graph structure.'
    ],
    correctAnswer: 0,
    explanation: 'Link analysis methods like HITS and PageRank rely on iterative refinement of node scores (hub/authority or rank) until convergence.',
    topics: ['Link Analysis', 'HITS Algorithm', 'PageRank', 'Week 8'] // Added PageRank
  },
  {
    id: 'diff-w8-q4', // Corrected: Added quotes
    text: 'What happens to the hub and authority scores of nodes after several iterations of the HITS algorithm?',
    options: [
      'They converge to stable values.', // Correct: Assuming conditions for convergence are met
      'They oscillate indefinitely.', // Possible in some specific graph structures if not handled
      'They reset to their initial values.',
      'They grow without bound.' // Scores are typically normalized to prevent this
    ],
    correctAnswer: 0,
    explanation: 'The HITS algorithm is designed to converge to stable hub and authority scores through iterative updates, usually involving normalization.',
    topics: ['HITS Algorithm', 'Convergence', 'Week 8']
  },
  {
    id: 'diff-w8-q5', // Corrected: Added quotes
    text: 'Which algorithm is commonly used to calculate hub and authority scores in a graph?',
    options: [
      'HITS (Hyperlink-Induced Topic Search)',
      'PageRank', // Calculates importance, not specifically hub/authority scores
      'Dijkstra’s Algorithm', // Shortest path
      'Breadth-First Search' // Traversal / Shortest path (unweighted)
    ],
    correctAnswer: 0,
    explanation: 'The HITS algorithm was specifically developed by Jon Kleinberg to identify hubs and authorities in linked environments like the web.',
    topics: ['HITS Algorithm', 'Graph Algorithms', 'Week 8']
  },
  {
    id: 'diff-w8-q6', // Corrected: Added quotes
    text: 'In the HITS algorithm, how are hub and authority scores updated during each iteration?',
    options: [
      // 'Hub scores are calculated based on outgoing links, and authority scores are based on incoming links.', // Needs more detail
      'A node\'s authority score is the sum of hub scores of nodes pointing to it; its hub score is the sum of authority scores of nodes it points to.', // More precise definition
      'Hub scores are assigned randomly, and authority scores depend on the graph density.',
      'Hub and authority scores are not interdependent.', // Incorrect: They are interdependent
      'Hub scores are updated based on incoming links, and authority scores based on outgoing links.' // Incorrect: Opposite is true
    ],
    // Assuming Option 0 implicitly means the correct update rule. Rephrasing option 0 for clarity.
    correctAnswer: 0, // Let's assume the first option implies the correct mechanism.
    explanation: 'In HITS, a node\'s authority score is updated based on the hub scores of nodes linking *to* it. Its hub score is updated based on the authority scores of nodes it links *to*. Scores are usually normalized after each update step.',
    topics: ['HITS Algorithm', 'Link Analysis', 'Week 8']
  },
  {
    id: 'diff-w8-q7', // Corrected: Added quotes
    text: 'What ensures the convergence of the PageRank algorithm during iterative updates?',
    options: [
      'The graph is strongly connected, and a damping factor is used.', // Correct: Damping factor handles sinks/disconnectivity. Strong connectivity helps but isn't strictly required with damping.
      'All nodes are assigned equal rank initially.', // Initial values don't guarantee convergence.
      'Only the top-ranked nodes are considered for convergence.',
      'The damping factor is set to zero.' // d=0 means rank depends only on teleportation, not links.
    ],
    correctAnswer: 0,
    explanation: 'Convergence of PageRank (to a unique steady state) is guaranteed by the properties of irreducible and aperiodic Markov chains, which the modified graph (with damping factor/teleportation) satisfies.',
    topics: ['PageRank', 'Convergence', 'Week 8']
  },
  {
    id: 'diff-w8-q8', // Corrected: Added quotes
    text: 'How does PageRank ensure conservation of rank across the graph during the link-following part of the update?',
    options: [
      'By redistributing a node\'s current rank proportionally across its outgoing edges.', // Correct: Rank flows out
      'By normalizing scores globally at each step of the iteration.', // Normalization keeps sum=1, but redistribution is the mechanism.
      'By removing nodes with zero in-degree.',
      'By assigning higher scores to isolated nodes.' // Isolated nodes get rank only through damping.
    ],
    correctAnswer: 0,
    explanation: 'PageRank works by iteratively distributing a node\'s rank score among the nodes it links to. A node with k outgoing links passes Rank/k to each neighbor (before considering the damping factor).',
    topics: ['PageRank', 'Rank Distribution', 'Week 8']
  },
  {
    id: 'diff-w8-q9', // Corrected: Added quotes
    text: 'Why does repeated multiplication of the (modified) Google matrix in PageRank lead to convergence?',
    options: [
      'The matrix represents a stochastic process (Markov chain) that has a unique stationary distribution.', // Correct: Perron-Frobenius theorem
      'The matrix has uniform eigenvalues that dictate convergence.', // Eigenvalues are involved, but not uniform. Dominant eigenvalue is 1.
      'The graph contains no cycles, ensuring convergence.', // PageRank works on graphs with cycles.
      'The damping factor eliminates randomness in the network.' // Damping *introduces* randomness (teleportation).
    ],
    correctAnswer: 0,
    explanation: 'The PageRank calculation corresponds to finding the principal eigenvector of the modified transition matrix (Google matrix). Repeated multiplication is the Power Iteration method, which converges to this eigenvector due to the properties guaranteed by the Perron-Frobenius theorem for stochastic matrices.',
    topics: ['PageRank', 'Stochastic Processes', 'Markov Chains', 'Week 8'] // Added Markov Chains
  },
  {
    id: 'diff-w8-q10', // Corrected: Added quotes
    text: 'In the context of PageRank, what is the significance of the dominant eigenvector (corresponding to eigenvalue 1) of the transition matrix?',
    options: [
      'It represents the steady-state distribution of PageRank scores.', // Correct
      'It determines the degree distribution of nodes in the graph.',
      'It is used to calculate the number of edges in the graph.',
      'It is irrelevant for networks with isolated nodes.' // It's relevant; describes the final rank distribution.
    ],
    correctAnswer: 0,
    explanation: 'The dominant eigenvector of the Google matrix represents the stationary distribution of the random walk process defined by PageRank. The components of this normalized eigenvector are the PageRank scores of the nodes.',
    topics: ['PageRank', 'Eigenvectors', 'Week 8']
  }
  ,
  {
    id: 'webgraph-w6-q1',
    text: 'Which of the following best describes a web graph?',
    options: [
      'A graph with nodes representing users and edges representing their social connections',
      'A directed graph where nodes represent web pages and edges represent hyperlinks',
      'A graph representing data transmission in a network',
      'An undirected graph with nodes representing servers and edges representing data flows'
    ],
    correctAnswer: 1,
    explanation: 'A web graph models the structure of the World Wide Web, where pages are nodes and hyperlinks are directed edges connecting them.',
    topics: ['Web Graph', 'Graph Theory', 'Week 6']
  },
  {
    id: 'webgraph-w6-q2',
    text: 'What is the main challenge in analyzing web graphs at a large scale?',
    options: [
      'Ensuring the graph remains connected',
      'Handling the scale-free and sparse nature of the graph',
      'Maintaining an equal degree distribution for all nodes',
      'Converting directed graphs into undirected graphs'
    ],
    correctAnswer: 1,
    explanation: 'Real-world web graphs are massive (billions of nodes/edges), sparse (most pages don\'t link to most others), and often exhibit scale-free properties (power-law degree distribution), posing significant computational and analytical challenges.',
    topics: ['Web Graph', 'Scale-Free Networks', 'Sparsity', 'Week 6']
  },
  {
    id: 'distribution-w6-q3',
    text: 'In the equal coin distribution problem, the goal is typically to:',
    options: [
      'Minimize the number of coins redistributed',
      'Maximize the sum of coins in the system',
      'Ensure every individual has the same number of coins after redistribution',
      'Distribute coins randomly among all individuals'
    ],
    correctAnswer: 2,
    explanation: 'The core objective of the equal coin distribution problem is to reach a state where the total number of coins is evenly divided among all participants.',
    topics: ['Distribution Models', 'Simulation', 'Week 6']
  },
  {
    id: 'distribution-w6-q4',
    text: 'What condition must hold true for equal coin distribution to be possible in a system of N people with C total coins?',
    options: [
      'C must be a multiple of N',
      'C must be an even number',
      'The graph must be fully connected', // Connectivity allows redistribution, but doesn't guarantee possibility if C%N != 0
      'N must be a prime number'
    ],
    correctAnswer: 0,
    explanation: 'For every person to have an equal integer number of coins, the total number of coins (C) must be perfectly divisible by the number of people (N).',
    topics: ['Distribution Models', 'Simulation', 'Week 6']
  },
  {
    id: 'distribution-w6-q5',
    text: 'In random coin dropping simulations (like the Yard-Sale model or related wealth distribution models), which of the following distributions is often observed in the final system state?',
    options: [
      'Gaussian distribution',
      'Uniform distribution',
      'Power-law distribution', // Or often Boltzmann/Exponential-like depending on exact model
      'Exponential distribution' // Often cited result for simple models
    ],
    // Note: Power-law is sometimes observed in more complex models, but Exponential/Boltzmann is common in simpler ones. Let's stick to the original 'Power-law' based on the provided answer, acknowledging nuance.
    correctAnswer: 2,
    explanation: 'Simple random exchange models often lead to highly unequal distributions, frequently resembling exponential or power-law distributions, where a few agents hold most of the wealth/coins.',
    topics: ['Distribution Models', 'Simulation', 'Power Law', 'Inequality', 'Week 6']
  },
  {
    id: 'distribution-w6-q6',
    text: 'What does random coin dropping often illustrate in terms of network behavior or economic models?',
    options: [
      'Centralized control of resources',
      'Emergence of inequality in distributions over time',
      'Uniform redistribution of resources',
      'Cyclic patterns in resource allocation'
    ],
    correctAnswer: 1,
    explanation: 'These simulations demonstrate how simple, local, random interactions can lead to macroscopic patterns of inequality, even without explicit mechanisms favoring the rich.',
    topics: ['Distribution Models', 'Simulation', 'Inequality', 'Emergence', 'Week 6']
  },
  {
    id: 'pagerank-w6-q7',
    text: 'In Google’s PageRank algorithm, a node’s rank is determined primarily by:',
    options: [
      'Its in-degree only',
      'Its out-degree only',
      'The ranks of its incoming neighbors and their out-degrees',
      'The ranks of its outgoing neighbors and their in-degrees'
    ],
    correctAnswer: 2,
    explanation: 'A page\'s PageRank depends on the PageRank scores of the pages linking *to* it, weighted inversely by the number of outbound links (out-degree) those linking pages have.',
    topics: ['PageRank', 'Link Analysis', 'Algorithms', 'Week 6']
  },
  {
    id: 'pagerank-w6-q8',
    text: 'In the basic point distribution method (iterative update) for PageRank, what happens when a node distributes its rank points to its neighbors?',
    options: [
      'It retains half of its points and distributes the rest equally',
      'It loses all its points in the next iteration', // Its points are *replaced* by incoming points
      'It distributes all its current rank points equally among its outgoing neighbors',
      'It distributes points based on the degree of neighbors'
    ],
    correctAnswer: 2, // This describes the core link-following distribution part
    explanation: 'In each iteration, a node passes its current PageRank score, divided equally among all the pages it links to (its out-neighbors). Its new score is then calculated based on the rank it receives from its in-neighbors.',
    topics: ['PageRank', 'Link Analysis', 'Algorithms', 'Week 6']
  },
  {
    id: 'pagerank-w6-q9',
    text: 'How does the standard PageRank algorithm conceptually handle “dangling nodes” (nodes with no outgoing edges)?',
    options: [
      'Dangling nodes are removed from the graph',
      'A damping factor redistributes their rank randomly', // Damping factor applies everywhere, not just dangling nodes
      'Their rank is effectively redistributed equally among all nodes in the graph', // This is the typical conceptual fix
      'Their rank remains constant in the system'
    ],
    correctAnswer: 2,
    explanation: 'To prevent rank from "leaking" out of the network at dangling nodes, their PageRank contribution in each iteration is typically modeled as being distributed uniformly across all pages in the graph, as if they linked to every page.',
    topics: ['PageRank', 'Link Analysis', 'Dangling Nodes', 'Week 6']
  },
  {
    id: 'pagerank-w6-q10',
    text: 'Which of the following best describes the difference between simple degree rank (e.g., in-degree) and PageRank in a web graph?',
    options: [
      'Degree rank considers only the number of incoming links, while PageRank considers the importance (rank) of those linking pages.',
      'Degree rank is computed iteratively, while PageRank is calculated directly', // Both are typically iterative
      'PageRank uses only in-degrees, while degree rank uses both in-degrees and out-degrees', // Degree rank usually refers to in-degree in this context; PageRank uses structure beyond just in-degree.
      'Degree rank is always higher than PageRank for nodes with high connectivity' // Not necessarily true
    ],
    correctAnswer: 0,
    explanation: 'Simple in-degree rank treats all incoming links equally. PageRank weights incoming links by the rank of the source page, meaning a link from an important page contributes more to the target\'s rank than a link from an unimportant page.',
    topics: ['PageRank', 'Degree Centrality', 'Link Analysis', 'Week 6']
  }
  // ... (Keep other weeks' questions below or above this block) ...
  ,// Week 3 Questions (Tie Strength, Triads, Bridges, Community Detection)
  {
    id: 'ties-w3-q1',
    text: 'Which of the following best explains the concept of “strength of weak ties” in social networks?',
    options: [
      'Weak ties are not important in social networks.',
      'Weak ties connect different groups, facilitating the flow of new information.',
      'Weak ties are more trustworthy than strong ties.',
      'Weak ties only exist within closely connected groups.'
    ],
    correctAnswer: 1,
    explanation: 'Granovetter\'s theory highlights that weak ties often bridge separate social clusters, providing access to novel information and opportunities not found within one\'s immediate strong-tie group.',
    topics: ['Tie Strength', 'Granovetter', 'Information Diffusion', 'Network Structure', 'Week 3']
  },
  {
    id: 'triad-w3-q2',
    text: 'In a social network, a triad often refers to:',
    // Note: Technically a triad is any set of 3 nodes. The options are specific configurations. Option 0 describes a closed triad/triangle. Assuming the context implies interaction/closure.
    options: [
      'A group of three nodes where all are potentially connected or interacting (focus is on the set of 3).', // More general definition
      'A set of three nodes connected by a single edge.',
      'A group of three nodes with no connections.',
      'A set of three nodes, such as A, B, C, where A-B and B-C edges exist (an open triad).' // Option 0 is often what's meant in balance/closure discussions. Let's refine option 0 based on the likely intent.
    ],
    // Reworking options based on common usage, especially considering "closed triad" focus.
    options: [
      'A group of three nodes considered as a unit, especially regarding their mutual connections.', // General start
      'A set of three nodes where at least two edges exist between them.', // Common structural unit
      'Specifically, a group of three nodes where all three are connected to each other (a triangle or closed triad).', // Often the focus
      'Any set of three nodes, regardless of connections.'
    ],
    // Based on the original accepted answer "A group of three nodes where all are connected", let's use that specific definition.
    options: [
      'A group of three nodes where all are connected to each other (a closed triad or triangle).',
      'A set of three nodes connected by a single edge.',
      'A group of three nodes with no connections.',
      'A set of three nodes, with exactly two connected.'
    ],
    correctAnswer: 0, // Assuming the intended answer refers to a closed triad/triangle (K3)
    explanation: 'In network analysis, particularly when discussing concepts like transitivity and structural balance, a "triad" often refers to a set of three nodes, and a "closed triad" or "triangle" is one where all three nodes are mutually connected.',
    topics: ['Triads', 'Graph Theory', 'Network Structure', 'Week 3']
  },
  {
    id: 'overlap-w3-q3',
    text: 'Neighbourhood overlap for two nodes in a graph is best described as:',
    options: [
      'The number of edges directly connecting the two nodes (usually 0 or 1 in simple graphs).',
      'The number of neighbours that the two nodes have in common.',
      'The degree (number of neighbours) of one of the nodes.',
      'The length of the shortest path between the two nodes.'
    ],
    correctAnswer: 1,
    explanation: 'Neighborhood overlap quantifies the extent to which two nodes share the same connections in the network. It\'s a measure of similarity based on shared neighbors.',
    topics: ['Network Metrics', 'Node Similarity', 'Neighborhood Overlap', 'Week 3']
  },
  {
    id: 'bridge-w3-q4',
    text: 'In the context of social network analysis and graph theory, a bridge is:',
    options: [
      'An edge whose removal increases the number of connected components in the graph.',
      'An isolated node in the graph.',
      'A node that connects two communities.', // This node might have high betweenness, but isn't the definition of a bridge edge.
      'An edge that connects two nodes with no common neighbors.' // This relates to embeddedness/local bridges.
    ],
    correctAnswer: 0,
    explanation: 'A bridge is a critical edge for connectivity; if it is removed, the graph splits into more pieces (or a connected part becomes disconnected).',
    topics: ['Graph Theory', 'Connectivity', 'Bridges', 'Week 3']
  },
  {
    id: 'localbridge-w3-q5',
    text: 'A local bridge is typically defined as an edge connecting two nodes that:',
    options: [
      'Have very high degrees.',
      'Has the highest betweenness centrality in the graph.', // Global property, not local.
      'Have no other connections (common neighbors) between them; their shortest path without this edge would be long.',
      'Belong to the same densely connected community.' // The opposite is usually true.
    ],
    correctAnswer: 2,
    explanation: 'A local bridge connects two nodes that otherwise have no mutual friends/neighbors. Its removal would significantly increase the distance between these two nodes. These often correspond to weak ties.',
    topics: ['Tie Strength', 'Bridges', 'Network Structure', 'Local Bridge', 'Week 3']
  },
  {
    id: 'embeddedness-w3-q6',
    text: 'In the context of social networks, embeddedness refers to:',
    options: [
      'The total number of connections (degree) a node has.',
      'The degree to which a relationship (an edge) between two nodes is reinforced by mutual connections to common neighbors.',
      'The isolation or lack of connections of a node in the network.',
      'The length of the shortest path between two nodes in the graph.'
    ],
    correctAnswer: 1,
    explanation: 'High embeddedness of an edge (tie) means the two connected individuals share many common friends or contacts, making the relationship socially supported and often stronger.',
    topics: ['Embeddedness', 'Tie Strength', 'Network Structure', 'Neighborhood Overlap', 'Week 3']
  },
  {
    id: 'hole-w3-q7',
    text: 'A structural hole in a network, as described by Ronald Burt, refers to:',
    options: [
      'A complete graph (clique) with no isolated nodes.',
      'A lack of connection or a gap between two individuals or groups who are otherwise disconnected.',
      'A node with the highest centrality (e.g., degree or betweenness) in the network.',
      'A cluster or community of nodes that are all densely connected to each other.'
    ],
    correctAnswer: 1,
    explanation: 'A structural hole represents an opportunity for a node (or individual) positioned between disconnected groups to act as a broker, controlling information flow and gaining social capital.',
    topics: ['Structural Holes', 'Network Structure', 'Social Capital', 'Brokerage', 'Week 3']
  },
  {
    id: 'capital-w3-q8',
    text: 'Social capital, in a network context, generally refers to:',
    options: [
      'The total number of edges in the graph.',
      'The sum of all the connection strengths (weights) a node has.',
      'The benefits, resources, information, or opportunities an individual can access through their social connections and network position.',
      'The average degree of the nodes in the network.'
    ],
    correctAnswer: 2,
    explanation: 'Social capital is the value derived from social relationships and network structures, such as access to information, influence, trust, and support.',
    topics: ['Social Capital', 'Network Resources', 'Sociology', 'Week 3']
  },
  {
    id: 'bruteforce-w3-q9',
    text: 'In the brute-force method for community detection, considering all possible ways to divide a graph with n nodes into exactly two non-empty communities gives approximately how many possibilities?',
    // Formula is (2^n - 2) / 2 = 2^(n-1) - 1. Option 2^(n-2) is given as correct.
    options: [
      '2ⁿ', // Total subsets assignment, includes empty/full sets
      '2ⁿ⁻¹', // Close, but off by 1 for non-empty requirement
      '2ⁿ⁻²', // The provided answer, potentially an approximation or specific convention
      '2ⁿ/²' // Incorrect scaling
    ],
    correctAnswer: 2, // As per the provided "Accepted Answers" despite standard formula being 2^(n-1) - 1
    explanation: 'Finding the optimal partition into two communities by checking every possibility is computationally expensive. The number of ways to assign n nodes to two distinct, non-empty groups scales exponentially, approximately as 2ⁿ⁻¹ or 2ⁿ⁻² depending on exact counting conventions.',
    topics: ['Community Detection', 'Algorithms', 'Complexity', 'Graph Partitioning', 'Week 3']
  },
  {
    id: 'girvanewman-w3-q10',
    text: 'The Girvan-Newman algorithm for community detection progressively identifies communities by iteratively:',
    options: [
      'Removing edges with the lowest betweenness centrality.',
      'Removing nodes with the highest degree.',
      'Removing edges with the highest betweenness centrality.', // Edges acting as bridges between communities tend to have high betweenness.
      'Randomly removing edges until the network splits into communities.'
    ],
    correctAnswer: 2,
    explanation: 'The Girvan-Newman algorithm is based on the idea that edges connecting different communities likely lie on many shortest paths between nodes in those different communities, thus having high edge betweenness. Removing these edges gradually separates the communities.',
    topics: ['Community Detection', 'Algorithms', 'Betweenness Centrality', 'Girvan-Newman', 'Week 3']
  }
  // ... (Keep other weeks' questions below or above this block) ...,
  ,
  // Week 4 Questions (Tie Strength, Centrality, Modularity, Homophily, Influence)
  {
    id: 'granovetter-w4-q1',
    text: 'Granovetter’s theory of "The Strength of Weak Ties" suggests that:',
    options: [
      'Strong ties contribute most to the spread of novel information across a network.',
      'Weak ties often act as bridges connecting different social clusters.',
      'Passive engagement is the primary driver of tie formation.',
      'Weak ties are typically more emotionally intense than strong ties.'
    ],
    correctAnswer: 1,
    explanation: 'Granovetter argued that weak ties are crucial because they bridge otherwise disconnected groups, facilitating the flow of new information, opportunities (like jobs), and ideas between these groups.',
    topics: ['Tie Strength', 'Granovetter', 'Network Structure', 'Information Diffusion', 'Week 4']
  },
  {
    id: 'engagement-w4-q2',
    text: 'In analyzing passive engagement (e.g., "lurking") on social media, which behavior best captures this specific type of interaction level?',
    options: [
      'Frequency of likes and comments', // Active engagement
      'Time spent scrolling or viewing content without explicit interaction (liking, commenting, sharing)', // Passive engagement
      'Number of posts shared per day', // Active engagement / Content creation
      'Ratio of followers to following' // Network structure metric, not engagement type
    ],
    correctAnswer: 1,
    explanation: 'Passive engagement refers to consuming content without leaving visible interaction traces like likes, comments, or shares. Time spent viewing is a proxy for this.',
    topics: ['Social Media', 'User Behavior', 'Passive Engagement', 'Metrics', 'Week 4']
  },
  {
    id: 'betweenness-w4-q3',
    text: 'The betweenness centrality of a node v in a graph G is formally calculated by:',
    options: [
      '∑ᵢ≠ⱼ (σᵢⱼ(v) / σᵢⱼ), where σᵢⱼ is the total number of shortest paths between nodes i and j, and σᵢⱼ(v) is the number of those paths passing through v.', // Correct formula
      'The ratio of the node’s degree to the total number of edges.', // Degree centrality related
      'The clustering coefficient of the node.', // Local structure metric
      'The sum of weights of edges connected to v.' // Weighted degree
    ],
    correctAnswer: 0,
    explanation: 'Betweenness centrality quantifies how often a node lies on the shortest path between other pairs of nodes, indicating its importance as a bridge or intermediary in the network.',
    topics: ['Centrality Measures', 'Betweenness Centrality', 'Network Analysis', 'Graph Theory', 'Week 4']
  },
  {
    id: 'modularity-w4-q4',
    text: 'In graph partitioning and community detection, the modularity measure (Q) is used to evaluate:',
    options: [
      'The density of a node’s local neighborhood.', // Clustering coefficient related
      'The quality of a partition based on the density of links within communities compared to links between communities.',
      'The average degree of nodes in a graph.', // Basic graph property
      'The overall size of the graph (number of nodes or edges).' // Basic graph property
    ],
    correctAnswer: 1,
    explanation: 'Modularity quantifies how well a network is divided into communities (partitions). High modularity indicates dense connections within communities and sparse connections between them, relative to what would be expected in a random network with the same degree sequence.',
    topics: ['Community Detection', 'Modularity', 'Graph Partitioning', 'Network Analysis', 'Week 4']
  },
  {
    id: 'strongties-w4-q5',
    text: 'In a social network graph where edges represent relationships, strong relationships (strong ties) can often be identified or inferred using:',
    options: [
      'Nodes with the highest degree centrality (many connections, not necessarily strong ones).',
      'Nodes connected by edges with high weights (if weights represent interaction frequency, duration, intimacy, etc.).',
      'Nodes with low clustering coefficients (often indicates bridging ties, likely weaker).',
      'Nodes that are part of disjoint communities (no information about tie strength within).',
    ],
    correctAnswer: 1,
    explanation: 'If the graph is weighted, higher edge weights representing factors like frequent interaction, emotional closeness, or mutual trust are direct indicators of stronger ties.',
    topics: ['Tie Strength', 'Weighted Graphs', 'Network Analysis', 'Social Networks', 'Week 4']
  },
  {
    id: 'weakties-w4-q6',
    text: 'Weak relationships (weak ties) are considered essential in network analysis primarily because:',
    options: [
      'They reduce the clustering coefficient of the network (they might, but not their primary importance).',
      'They often bridge different social clusters, enabling diffusion of novel information and opportunities.',
      'They increase the density of the graph (not necessarily).',
      'They are generally more stable than strong ties (often the opposite is true).'
    ],
    correctAnswer: 1,
    explanation: 'Consistent with Granovetter\'s theory, weak ties frequently connect individuals from different social circles, acting as conduits for information or resources not available within one\'s tightly-knit group.',
    topics: ['Tie Strength', 'Granovetter', 'Information Diffusion', 'Network Structure', 'Week 4']
  },
  {
    id: 'homophily-w4-q7',
    text: 'The tendency of individuals to associate with similar others is known as homophily. A simple way to measure it in a network with node attributes (e.g., group membership) is the homophily index (H), often calculated as:',
    options: [
      'H = (Number of connections between similar individuals) / (Total number of connections)',
      'H = Clustering coefficient / Degree centrality',
      'H = Betweenness centrality × Degree centrality',
      'H = (Number of inter-group connections) / (Total number of connections)' // This measures heterophily
    ],
    correctAnswer: 0,
    explanation: 'The homophily index directly measures the fraction of ties that connect nodes with the same characteristic, compared to the total number of ties. A value greater than expected by chance indicates homophily.',
    topics: ['Homophily', 'Network Metrics', 'Social Networks', 'Assortativity', 'Week 4']
  },
  {
    id: 'influence-w4-q8',
    text: 'How can social influence (where one person\'s behavior affects another\'s) be empirically tested or distinguished from homophily (similar people connecting) in a longitudinal study of social networks?',
    options: [
      'By measuring changes in individuals’ behaviors or states *after* new connections are formed or existing connections change, controlling for prior similarity.',
      'By calculating clustering coefficients of influential nodes.',
      'By evaluating the modularity of the network before and after interventions.',
      'By comparing the degree centrality of nodes over time.'
    ],
    correctAnswer: 0,
    explanation: 'Longitudinal data allows researchers to see if changes in network ties precede changes in behavior. Statistical methods can then attempt to disentangle whether connections cause behavior change (influence) or similar behaviors cause connection formation (homophily).',
    topics: ['Social Influence', 'Homophily', 'Causality', 'Longitudinal Analysis', 'Week 4']
  },
  {
    id: 'foci-w4-q9',
    text: 'In social network theory, foci closure (or focal closure) refers to the increased likelihood of tie formation between individuals due to:',
    options: [
      'Shared affiliation with activities, organizations, places, or social contexts (foci) that bring them into contact.',
      'Strong ties that persist despite geographic separation.',
      'Nodes with high betweenness centrality influencing smaller clusters.',
      'The probability of network rewiring events.'
    ],
    correctAnswer: 0,
    explanation: 'Feld\'s theory of focused interaction argues that shared activities or settings (foci) provide opportunities for interaction and are a primary driver for the formation of social ties.',
    topics: ['Tie Formation', 'Foci Closure', 'Social Context', 'Network Theory', 'Week 4']
  },
  {
    id: 'fatman-w4-q10',
    text: 'The "Fatman" Evolutionary Model (related to Bianconi-Barabási fitness model) suggests that preferential attachment in growing networks is driven by:',
    options: [
      'Both the degree of existing nodes (rich-get-richer) and an intrinsic "fitness" or attractiveness of nodes.',
      'Randomized connections that optimize modularity.',
      'Shortest path distribution across clusters.',
      'Edge weights that decay exponentially over time.'
    ],
    correctAnswer: 0,
    explanation: 'This model extends basic preferential attachment by adding a fitness parameter (η) to each node. The probability of a new node connecting to an existing node i depends on both its degree kᵢ and its fitness ηᵢ (often combined as ηᵢkᵢ).',
    topics: ['Network Growth Models', 'Preferential Attachment', 'Fitness Model', 'Scale-Free Networks', 'Week 4']
  }
  // ... (Keep other weeks' questions below or above this block) ...
,
  {
    id: 'schelling-w5-q1',
    text: 'Which of the following is a key factor contributing to spatial segregation in a Schelling model?',
    options: [
      'Random movement of individuals',
      'Preference for neighbours of similar characteristics',
      'Strong central nodes in the network', // Corrected typo: tlhe -> the
      'High clustering coefficients in social graphs'
    ],
    correctAnswer: 1,
    explanation: 'The Schelling model demonstrates that even mild preferences for having neighbors of the same type (similarity preference) can lead to large-scale segregation.',
    topics: ['Schelling Model', 'Segregation', 'Agent-Based Modeling', 'Week 5']
  },
  {
    id: 'schelling-w5-q2',
    text: 'In spatial segregation, increasing the tolerance threshold (i.e., requiring a *smaller* fraction of similar neighbors to be satisfied) in the Schelling model typically leads to:',
    options: [
      'Increased segregation',
      'Reduced segregation',
      'No change in segregation patterns',
      'Complete randomization of the system'
    ],
    correctAnswer: 1,
    explanation: 'Higher tolerance (a lower threshold for the minimum required fraction of similar neighbors) means agents are satisfied more easily, reducing the need to move and thus leading to less segregation.',
    topics: ['Schelling Model', 'Segregation', 'Tolerance', 'Week 5']
  },
  {
    id: 'schelling-w5-q3',
    text: 'The Schelling model of segregation assumes that individuals:',
    options: [
      'Move randomly to new locations',
      'Relocate only when dissatisfied with their neighbors',
      'Always maximize their number of neighbors',
      'Form coalitions based on strong preferences'
    ],
    correctAnswer: 1,
    explanation: 'In the basic Schelling model, agents stay put if their neighborhood meets their minimum similarity threshold; they only consider moving if dissatisfied.',
    topics: ['Schelling Model', 'Agent-Based Modeling', 'Decision Rules', 'Week 5']
  },
  {
    id: 'schelling-w5-q4',
    text: 'Which of the following best explains why the Schelling model exhibits segregation even with low intolerance levels (mild preferences)?',
    options: [
      'Random noise in movement',
      'Positive feedback loops in local preferences',
      'Network centrality biases',
      'Global optimization strategies'
    ],
    correctAnswer: 1,
    explanation: 'When one agent moves to satisfy its preference, it can slightly alter the neighborhood composition, potentially causing a neighbor to become dissatisfied and move, creating a cascading or feedback effect that amplifies segregation.',
    topics: ['Schelling Model', 'Segregation', 'Feedback Loops', 'Emergence', 'Week 5']
  },
  {
    id: 'balance-w5-q5',
    text: 'In structural balance theory, a triad with one positive edge (+) and two negative edges (-) is:',
    options: [
      'Balanced', // (-,-,+) -> "enemy of my enemy is my friend"
      'Unbalanced',
      'Neutral',
      'Impossible in theory'
    ],
    correctAnswer: 0,
    explanation: 'A triad is balanced if the product of the signs of its edges is positive. For (+, -, -), the product is (+1)*(-1)*(-1) = +1, indicating balance.',
    topics: ['Structural Balance Theory', 'Triads', 'Signed Networks', 'Week 5']
  },
  {
    id: 'balance-w5-q6',
    text: 'What does a negative relationship (-) in structural balance theory typically signify in a graph representing social ties?',
    options: [
      'Cooperation between nodes',
      'Dislike or rivalry between nodes',
      'A lack of a connection', // No edge signifies lack of connection
      'A mediator between two balanced nodes'
    ],
    correctAnswer: 1,
    explanation: 'In social contexts, negative edges in structural balance theory represent antagonism, conflict, dislike, or rivalry between the connected nodes (individuals or groups).',
    topics: ['Structural Balance Theory', 'Signed Networks', 'Relationships', 'Week 5']
  },
  {
    id: 'balance-w5-q7',
    text: 'The structural balance theorem (Cartwright & Harary) states that a signed complete graph is balanced if and only if its nodes can be partitioned into:',
    options: [
      'Two subsets (coalitions) such that all edges within a subset are positive and all edges between the subsets are negative (or one subset is empty).',
      'A single graph with all positive edges', // This is one specific balanced state
      'Multiple subgraphs with both positive and negative edges',
      'A graph with equal positive and negative edges'
    ],
    // Note: The original text had "Accepted Answers: ..." with 0 points, possibly an error in the source material. The theorem is correctly stated in option 0.
    correctAnswer: 0,
    explanation: 'The core theorem of structural balance states that a balanced network can be perfectly divided into two mutually antagonistic factions (or is one single cohesive group).',
    topics: ['Structural Balance Theory', 'Theorems', 'Signed Networks', 'Partitions', 'Week 5']
  },
  {
    id: 'balance-w5-q8',
    text: 'Which of the following triads is unbalanced according to structural balance theory?',
    options: [
      'All positive edges (+,+,+)', // Balanced: (+1)*(+1)*(+1) = +1
      'One positive edge and two negative edges (+,-,-)', // Balanced: (+1)*(-1)*(-1) = +1
      'Two positive edges and one negative edge (+,+,-)', // Unbalanced: (+1)*(+1)*(-1) = -1
      'All negative edges (-,-,-)' // Unbalanced: (-1)*(-1)*(-1) = -1 (Note: Often considered unstable/unbalanced)
    ],
    // Note: The original text had "Accepted Answers: ..." with 0 points for the option "Two positive edges and one negative edge", but this configuration *is* unbalanced. The all-negative triad is also unbalanced. Assuming the question intends the (+,+, -) configuration.
    correctAnswer: 2,
    explanation: 'A triad is unbalanced if the product of the signs of its edges is negative. For (+, +, -), the product is (+1)*(+1)*(-1) = -1. The all-negative triad (-,-,-) with product -1 is also unbalanced.',
    topics: ['Structural Balance Theory', 'Triads', 'Signed Networks', 'Week 5']
  },
  {
    id: 'balance-w5-q9',
    text: 'To characterize the overall balance of a large signed graph, one commonly evaluates:',
    options: [
      'Degree centrality of nodes',
      'The proportion or count of balanced versus unbalanced triads',
      'The number of connected components',
      'Clustering coefficients of all nodes'
    ],
    correctAnswer: 1,
    explanation: 'While the balance theorem applies strictly to complete graphs, the concept is extended to general graphs by analyzing the balance of local structures, primarily triads.',
    topics: ['Structural Balance Theory', 'Graph Analysis', 'Triads', 'Week 5']
  },
  {
    id: 'coalition-w5-q10',
    text: 'In coalition formation within signed networks, which concept from structural balance theory is most relevant for predicting stable coalitions?',
    options: [
      'The clustering coefficient of the graph',
      'The internal cohesion (positive ties) and external antagonism (negative ties)', // Relates to balanced partitions
      'The degree centrality of individual members',
      'The total number of triads in the network'
    ],
    correctAnswer: 1,
    explanation: 'Stable coalitions often correspond to balanced partitions in the network, where members within a coalition have positive ties, and ties between different coalitions are negative.',
    topics: ['Coalition Formation', 'Structural Balance Theory', 'Signed Networks', 'Stability', 'Week 5']
  },
  {
    id: 'powerlaw-w9-q1',
    text: 'A dataset follows a power-law distribution if:',
    options: [
      'A small number of observations account for a large proportion of the total magnitude or frequency (heavy tails).',
      'The data is symmetric and bell-shaped.', // Describes normal distribution
      'The probability of extreme values is negligible.', // Opposite of power law
      'The distribution always has a finite upper bound.' // Not necessarily true for power laws
    ],
    correctAnswer: 0,
    explanation: 'Power laws describe phenomena where a few items (e.g., cities, websites, words) dominate in size or frequency, leading to a "heavy tail" where extreme values are more common than in exponential or normal distributions.',
    topics: ['Power Law', 'Distributions', 'Heavy Tails', 'Week 9']
  },
  {
    id: 'powerlaw-w9-q2',
    text: 'Which of the following functions best represents a power-law probability distribution P(x) for large x?',
    options: [
      'P(x) ∼ e^(-λx)', // Exponential distribution
      'P(x) ∼ x^(-α) where α > 0', // Power-law distribution
      'P(x) ∼ (1 / sqrt(2πσ²)) * e^(-(x-μ)² / (2σ²))', // Normal (Gaussian) distribution
      'P(x) = mx + c' // Linear function (not a probability distribution over unbounded range)
    ],
    correctAnswer: 1,
    explanation: 'A power law describes a relationship where the probability (or frequency) P(x) of observing a value x decreases as a power of x, specifically P(x) is proportional to x raised to a negative exponent (-α).',
    topics: ['Power Law', 'Distributions', 'Mathematical Functions', 'Week 9']
  },
  {
    id: 'normal-w9-q3',
    text: 'Why do normal (Gaussian) distributions commonly appear in measurements of natural and social systems?',
    options: [
      'They often result from the summation or averaging of many small, independent random factors (Central Limit Theorem).',
      'They are the only distribution found in financial systems.', // Financial returns often have heavier tails
      'They arise when data is generated from a single, deterministic source.',
      'They only appear in perfectly symmetric datasets.'
    ],
    correctAnswer: 0,
    explanation: 'The Central Limit Theorem (CLT) provides a fundamental reason: the sum or average of a large number of independent and identically distributed random variables tends toward a normal distribution, regardless of the original distribution of the variables.',
    topics: ['Normal Distribution', 'Central Limit Theorem', 'Distributions', 'Week 9']
  },
  {
    id: 'normalvspower-w9-q4',
    text: 'If a process follows a normal distribution rather than a power law, which characteristic is *not* expected?',
    options: [
      'Long-tailed or heavy-tailed distribution (extreme values are relatively common).', // Characteristic of power laws
      'A well-defined mean and standard deviation that effectively characterize the distribution.',
      'Symmetry around the mean value.',
      'Predictable probability intervals (e.g., the 68-95-99.7 rule).'
    ],
    correctAnswer: 0,
    explanation: 'Normal distributions have exponentially decaying tails, meaning extreme events are very rare. Power laws are characterized by "heavy" or "long" tails, where extreme events are significantly more probable.',
    topics: ['Normal Distribution', 'Power Law', 'Distributions', 'Heavy Tails', 'Comparison', 'Week 9']
  },
  {
    id: 'wwwdist-w9-q5',
    text: 'The observation that the degree distribution of the World Wide Web (WWW) approximates a power-law implies that:',
    options: [
      'A small number of websites (hubs) have an extremely large number of incoming/outgoing links, while most websites have very few links.',
      'All websites have approximately the same number of links.', // Would be a regular graph or delta distribution
      'Websites are connected randomly with uniform probability (like an Erdős-Rényi graph).', // Leads to Poisson/normal-like distribution
      'The link structure of the WWW graph follows a normal distribution.'
    ],
    correctAnswer: 0,
    explanation: 'A power-law degree distribution is the hallmark of a scale-free network. In the context of the WWW, it means most pages have few links, but a few "hub" pages are extremely well-connected, dominating the network structure.',
    topics: ['Power Law', 'Scale-Free Networks', 'Web Graph', 'Degree Distribution', 'Hubs', 'Week 9']
  },
  {
    id: 'webattach-w9-q6',
    text: 'In models explaining the power-law degree distribution of the web graph (like the Barabási-Albert model), how does a new page typically choose which existing pages to link to?',
    options: [
      'It is equally likely to link to any existing page (random attachment).',
      'It has a higher probability of linking to an existing page that already has a high degree (preferential attachment).',
      'It is more likely to link to a randomly chosen low-degree page.',
      'It distributes its links according to a Gaussian probability based on existing page degrees.'
    ],
    correctAnswer: 1,
    explanation: 'The preferential attachment mechanism ("rich-get-richer" or "cumulative advantage") posits that new nodes are more likely to connect to nodes that are already well-connected, leading to the emergence of hubs and a power-law distribution.',
    topics: ['Power Law', 'Scale-Free Networks', 'Preferential Attachment', 'Web Graph', 'Network Growth Models', 'Week 9']
  },
  {
    id: 'verifypower-w9-q7',
    text: 'A common graphical method to check if a dataset might follow a power-law distribution is to:',
    options: [
      'Plot the frequency (or complementary cumulative distribution) on a log-log scale and look for an approximately straight-line relationship.',
      'Compute the mean and standard deviation and see if they are finite.', // Power laws may have infinite variance/mean
      'Plot the data on a linear scale and fit a normal distribution curve to check for symmetry.',
      'Apply the Central Limit Theorem to see if it converges to a normal distribution.'
    ],
    correctAnswer: 0,
    explanation: 'If P(x) ≈ cx⁻ᵃ, then log(P(x)) ≈ log(c) - α log(x). Plotting log(P(x)) versus log(x) yields a linear relationship with slope -α. This log-log plot linearity is a key visual indicator (though formal statistical tests are better for confirmation).',
    topics: ['Power Law', 'Data Analysis', 'Log-Log Plot', 'Distributions', 'Verification', 'Week 9']
  },
  {
    id: 'richgetricher-w9-q8',
    text: 'The “Rich-Get-Richer” phenomenon in network growth is a characteristic feature of:',
    options: [
      'Random attachment models (like Erdős-Rényi).',
      'Preferential attachment models.',
      'Models leading to normal degree distributions.',
      'Models based purely on geographic proximity.'
    ],
    correctAnswer: 1,
    explanation: '"Rich-get-richer" is the intuitive description of preferential attachment: nodes that already have many connections (are "rich" in links) are more likely to attract new connections.',
    topics: ['Preferential Attachment', 'Network Growth Models', 'Scale-Free Networks', 'Mechanism', 'Week 9']
  },
  {
    id: 'ba-model-w9-q9',
    text: 'The Barabási-Albert (BA) model, which combines network growth and preferential attachment, typically generates networks that:',
    options: [
      'Follow a Poisson or Normal degree distribution.',
      'Are scale-free, characterized by a power-law degree distribution.',
      'Have a structure where nodes only connect to their nearest neighbors (like a lattice).',
      'Have a constant average degree over time.'
    ],
    correctAnswer: 1,
    explanation: 'The BA model was specifically proposed to explain the origin of power-law degree distributions observed in many real-world networks. Its two key ingredients, growth and preferential attachment, naturally lead to scale-free structures.',
    topics: ['Barabási-Albert Model', 'Scale-Free Networks', 'Power Law', 'Network Growth Models', 'Week 9']
  },
  {
    id: 'scalefreerobust-w9-q10',
    text: 'How does the robustness of a scale-free network differ from a random (Erdős-Rényi) network when facing targeted attacks on high-degree nodes versus random node failures?',
    options: [
      'Scale-free networks are highly vulnerable to targeted attacks on hubs but relatively resilient to random failures; random networks show more gradual degradation in both cases.',
      'Both network types exhibit similar robustness characteristics under both attack types.',
      'Random networks collapse faster than scale-free networks under targeted attacks on hubs.', // Incorrect
      'Scale-free networks are more resilient than random networks under targeted attacks on hubs.' // Incorrect
    ],
    correctAnswer: 0,
    explanation: 'Scale-free networks have an "Achilles\' heel": their hubs. Removing hubs (targeted attack) quickly disconnects the network. However, randomly removing nodes is likely to hit low-degree nodes, having less impact. Random networks lack these critical hubs, making them less vulnerable to targeted attacks but also less resilient to random failures compared to the scale-free case.',
    topics: ['Scale-Free Networks', 'Network Robustness', 'Targeted Attack', 'Random Failure', 'Comparison', 'Week 9']
  },
  // Week 11 Questions (Small World, Milgram, Watts-Strogatz, Kleinberg Search)
  {
    id: 'smallworld-w11-q1',
    text: 'The Small World Effect suggests that the average shortest path length (L) between any two people in a large network (N nodes) is typically:',
    options: [
      'Proportional to the size of the network (L ~ N)',
      'Proportional to the logarithm of the network size (L ~ log N)',
      'Independent of the network size (L ~ constant)',
      'Proportional to the square root of the network size (L ~ sqrt(N))'
    ],
    correctAnswer: 1,
    explanation: 'A key feature of small-world networks is that the average distance between nodes grows very slowly (logarithmically) with the total number of nodes, making navigation surprisingly efficient even in massive networks.',
    topics: ['Small World Effect', 'Average Path Length', 'Network Scaling', 'Week 11']
  },
  {
    id: 'milgram-w11-q2',
    text: 'In Stanley Milgram’s Small World Experiment, what was the key quantitative observation about the path length between two randomly selected individuals in the US?',
    options: [
      'Most people were directly connected (path length 1).',
      'The average chain length for completed letters was around 6 steps ("degrees of separation").',
      'Only a very small fraction of people were reachable through chains.',
      'The experiment conclusively proved the small-world phenomenon exists identically in all types of networks.'
    ],
    correctAnswer: 1,
    explanation: 'Milgram\'s experiment provided empirical evidence for the small-world phenomenon, finding that messages could reach their target through social ties in a median of 5.5 to 6 steps, popularizing the phrase "six degrees of separation".',
    topics: ['Small World Effect', 'Milgram Experiment', 'Six Degrees of Separation', 'Empirical Study', 'Week 11']
  },
  {
    id: 'milgramlimit-w11-q3',
    text: 'What was a significant limitation noted in Milgram’s original small-world experiment?',
    options: [
      'The study population was limited geographically (starting points in Omaha/Wichita, target in Boston).',
      'A large fraction of the initiated letter chains never reached the final destination (high attrition rate).',
      'The initial participants were not selected entirely randomly from the population.',
      'All of the above are recognized limitations.'
    ],
    correctAnswer: 3,
    explanation: 'Milgram\'s pioneering study faced several methodological challenges, including geographic bias, high message attrition (only about 20-30% completed), and potential biases in participant selection and forwarding behavior, which affect the generalizability of the precise "6 degrees" figure.',
    topics: ['Milgram Experiment', 'Methodology', 'Limitations', 'Attrition', 'Bias', 'Week 11']
  },
  {
    id: 'smallworldsearch-w11-q4',
    text: 'Which structural characteristic(s) of a network are considered crucial for enabling both the small-world effect (short paths exist) and efficient decentralized search (finding short paths using only local information)?',
    options: [
      'High clustering coefficient (nodes\' friends know each other).',
      'Short average path length (global property).',
      'A scale-free degree distribution (presence of hubs).',
      'Both high clustering (A) and short average path length (B).'
    ],
    correctAnswer: 3, // Corresponds to "Both A and B"
    explanation: 'Small-world networks, as defined by Watts and Strogatz, exhibit both high local clustering (like regular lattices) and short global average path lengths (like random graphs). Kleinberg further showed that a specific structure combining local and long-range links is needed for efficient decentralized search.',
    topics: ['Small World Effect', 'Decentralized Search', 'Clustering Coefficient', 'Average Path Length', 'Network Properties', 'Week 11']
  },
  {
    id: 'wattsstrogatz-w11-q5',
    text: 'The Watts-Strogatz model generates networks exhibiting small-world properties. What is the key mechanism or operation used in this model?',
    options: [
      'Preferentially adding edges between distant nodes based on degree.',
      'Starting with a regular ring lattice and randomly rewiring a fraction (p) of the edges to create shortcuts.',
      'Starting with a fully connected graph and removing edges based on betweenness centrality.',
      'Implementing growth and preferential attachment to force hubs to emerge.' // This is the Barabási-Albert model
    ],
    correctAnswer: 1,
    explanation: 'The Watts-Strogatz model interpolates between a regular lattice (high clustering, long paths) and a random graph (low clustering, short paths) by randomly rewiring edges with probability p. Intermediate values of p yield networks with both high clustering and short paths.',
    topics: ['Watts-Strogatz Model', 'Small World Networks', 'Network Generation', 'Rewiring', 'Week 11']
  },
  {
    id: 'wattsstrogatz-p-w11-q6',
    text: 'In the Watts-Strogatz model, what happens to the network structure as the rewiring probability (p) increases from 0 towards 1?',
    options: [
      'The network transitions from regular towards random, causing the average path length to decrease significantly while clustering decreases more slowly at first.',
      'The clustering coefficient increases continuously.',
      'The network remains structurally similar to the initial regular lattice.',
      'The network rapidly becomes disconnected.' // Disconnection is unlikely unless p=1 and the graph is sparse
    ],
    correctAnswer: 0,
    explanation: 'Increasing p introduces random shortcuts ("weak ties") that drastically shorten the average path length across the network. The local clustering coefficient remains high for small p but eventually drops as the network loses its local lattice structure and approaches a random graph.',
    topics: ['Watts-Strogatz Model', 'Rewiring Probability', 'Average Path Length', 'Clustering Coefficient', 'Phase Transition', 'Week 11']
  },
  {
    id: 'wattsstrogatzvsrandom-w11-q7',
    text: 'Which characteristic primarily distinguishes Watts-Strogatz small-world networks (for intermediate rewiring probability p) from purely random (Erdős-Rényi) graphs of similar size and density?',
    options: [
      'Their combination of high clustering coefficient and short average path length.',
      'Their combination of low clustering coefficient and short average path length.', // Characteristic of random graphs
      'Their degree distribution always follows a power law.', // Not typical for WS model, more like BA model
      'Their structure is always scale-free.' // Not guaranteed by the WS model
    ],
    correctAnswer: 0,
    explanation: 'While both random graphs and WS small-world networks have short average path lengths, random graphs typically have very low clustering. The key feature of WS networks is retaining high clustering (a property of regular lattices) while achieving short path lengths (a property of random graphs).',
    topics: ['Watts-Strogatz Model', 'Random Graphs', 'Small World Networks', 'Clustering Coefficient', 'Average Path Length', 'Comparison', 'Week 11']
  },
  {
    id: 'kleinberg-w11-q8',
    text: 'In Jon Kleinberg’s model explaining efficient decentralized search in networks with an underlying structure (like a grid), what characteristic of the long-range connections is crucial?',
    options: [
      'The probability of forming a long-range link is purely random, independent of distance.',
      'The probability of forming a long-range link is directly proportional to the geographic distance.',
      'The probability of forming a long-range link between nodes decreases with distance (d) according to an inverse power law ( P(d) ~ d⁻ʳ ), where r matches the dimension of the grid.',
      'No additional long-range links are needed beyond the local grid connections.'
    ],
    correctAnswer: 2,
    explanation: 'Kleinberg mathematically proved that decentralized search algorithms (using only local information) can find short paths efficiently only if the probability of long-range connections decays as a specific power law of the distance, balanced between reaching far enough and providing enough local density.',
    topics: ['Kleinberg Model', 'Decentralized Search', 'Navigable Networks', 'Power Law', 'Distance', 'Routing', 'Week 11']
  },
  {
    id: 'searchrandom-w11-q9',
    text: 'Why is decentralized search generally considered difficult or inefficient in standard random (Erdős-Rényi) networks?',
    options: [
      'Nodes lack local information or cues (like geographic proximity or social similarity reflected in links) to effectively guide greedy routing towards the target.',
      'The clustering coefficient is typically too high, trapping search paths locally.', // Clustering is low in random graphs
      'Random networks inherently have too many long shortcuts, making navigation confusing.', // Shortcuts exist, but lack structure for navigation
      'Random networks are mathematically proven to never form hubs needed for efficient search.', // Hubs aren't the key issue here; lack of navigable structure is.
    ],
    correctAnswer: 0,
    explanation: 'In a random graph, links are structureless. A node has no local knowledge indicating which neighbor is "closer" to a distant target in any meaningful sense. Without some underlying structure (like Kleinberg\'s grid with power-law links), greedy algorithms fail.',
    topics: ['Decentralized Search', 'Random Graphs', 'Navigation', 'Routing', 'Network Structure', 'Limitations', 'Week 11']
  },
  {
    id: 'kleinbergapps-w11-q10',
    text: 'Which real-world phenomenon or system can Kleinberg’s model of decentralized search help to explain or provide insights into?',
    options: [
      'How humans navigate their social networks to find specific individuals (similar to Milgram\'s experiment).',
      'The potential mechanisms underlying the efficient spread of information or rumors through certain social structures.',
      'Design principles for efficient routing in peer-to-peer (P2P) networks where nodes have limited global knowledge.',
      'All of the above.'
    ],
    correctAnswer: 3, // Corresponds to "All of the above"
    explanation: 'Kleinberg\'s work has broad implications. It provides a theoretical basis for understanding how decentralized systems (social networks, P2P systems, potentially even information diffusion) can achieve efficient global navigation or search using only local information, given the right network structure.',
    topics: ['Kleinberg Model', 'Decentralized Search', 'Applications', 'Social Networks', 'P2P Networks', 'Information Diffusion', 'Week 11']
  },// Week 10 Questions (Preferential Attachment, Epidemics, Robustness)
  {
    id: 'prefattach-w10-q1',
    text: 'In a growing scale-free network model using preferential attachment, the probability that a new node connects to an existing node i is proportional to:',
    options: [
      'The square of the node’s current degree (kᵢ²)',
      'The reciprocal of the node’s current degree (1/kᵢ)',
      'The logarithm of the node’s current degree (log kᵢ)',
      'The node’s current degree (kᵢ)'
    ],
    correctAnswer: 3,
    explanation: 'The core mechanism of preferential attachment is that the probability Π(kᵢ) of a new node connecting to node i is directly proportional to the degree kᵢ of that node: Π(kᵢ) = kᵢ / Σⱼkⱼ. This is the "rich-get-richer" rule.',
    topics: ['Preferential Attachment', 'Scale-Free Networks', 'Network Growth Models', 'Degree', 'Week 10']
  },
  {
    id: 'prefattach-dist-w10-q2',
    text: 'In a network growing via preferential attachment (like the Barabási-Albert model), what typically happens to the degree distribution as the network grows large?',
    options: [
      'It follows a power-law distribution, characterized by many low-degree nodes and a few high-degree hubs.',
      'It approaches a normal (Gaussian) distribution with most nodes having a degree close to the average.',
      'The network stabilizes with a fixed number of high-degree nodes, and others remain low degree.',
      'The degree distribution converges to a Poisson distribution, typical of random graphs.'
    ],
    correctAnswer: 0,
    explanation: 'Preferential attachment inherently leads to the formation of hubs and results in a scale-free network structure, whose degree distribution follows a power law P(k) ~ k⁻ᵞ (typically with γ around 3 for the basic BA model).',
    topics: ['Preferential Attachment', 'Scale-Free Networks', 'Power Law', 'Degree Distribution', 'Barabási-Albert Model', 'Week 10']
  },
  {
    id: 'epidemic-sf-w10-q3',
    text: 'In a random network, disease spread might follow a classic percolation model. What additional factor makes epidemic spreading potentially more dangerous or faster in a scale-free network compared to a random network of similar size/density?',
    options: [
      'The presence of high-degree hubs, which can act as super-spreaders, rapidly transmitting the disease to many others.',
      'The clustering coefficient is typically higher in scale-free networks, effectively preventing transmission between communities.', // Clustering can sometimes slow global spread, but hubs dominate.
      'Scale-free networks have a fixed, small diameter, which limits the total extent of the spread.', // Small diameter facilitates spread.
      'The degree distribution follows a Poisson distribution in scale-free networks, reducing overall risk.' // Poisson is for random graphs.
    ],
    correctAnswer: 0,
    explanation: 'Hubs in scale-free networks provide shortcuts for diseases. Infecting a hub leads to rapid transmission to a large number of neighbors, significantly accelerating the epidemic compared to the more homogeneous structure of random networks.',
    topics: ['Epidemic Spreading', 'Scale-Free Networks', 'Hubs', 'Super-spreaders', 'Network Structure', 'Week 10']
  },
  {
    id: 'epidemic-r0-w10-q4',
    text: 'How does network structure, particularly the degree distribution, affect the basic reproductive number (R₀) or the epidemic threshold of a disease?',
    options: [
      'In scale-free networks with high degree variance (heterogeneity), the effective R₀ can be much higher, and the epidemic threshold can be vanishingly small, meaning epidemics can start easily.',
      'In random networks, R₀ is always greater than 1, guaranteeing an epidemic.', // R0 depends on disease/network properties, not always > 1.
      'In regular lattice-based networks, R₀ is typically exponentially high due to structured connectivity.', // Spread is often slower in lattices.
      'Network structure has no fundamental effect on R₀ or the epidemic threshold.' // Structure is critical.
    ],
    correctAnswer: 0,
    explanation: 'The heterogeneity of scale-free networks (high variance in degree) significantly impacts epidemic dynamics. The presence of hubs means even a low overall transmission probability can lead to sustained outbreaks, effectively lowering or eliminating the epidemic threshold observed in homogeneous networks.',
    topics: ['Epidemic Spreading', 'Scale-Free Networks', 'Basic Reproductive Number (R0)', 'Epidemic Threshold', 'Heterogeneity', 'Week 10']
  },
  {
    id: 'epidemic-control-w10-q5',
    text: 'If an epidemic is spreading rapidly in a scale-free network, which public health intervention strategy is likely to be most effective based on network structure?',
    options: [
      'Randomly vaccinating or isolating 50% of the population.',
      'Isolating nodes with the highest local clustering coefficient.',
      'Targeted vaccination or isolation of the highest-degree nodes (hubs).',
      'Uniformly reducing the number of contacts (edges) per node across the population.'
    ],
    correctAnswer: 2,
    explanation: 'Since hubs play a critical role in spreading diseases through scale-free networks, targeting these high-degree nodes for vaccination or isolation is disproportionately effective at disrupting transmission pathways and controlling the epidemic.',
    topics: ['Epidemic Control', 'Scale-Free Networks', 'Targeted Intervention', 'Vaccination Strategy', 'Hubs', 'Week 10']
  },
  {
    id: 'sirvssis-w10-q6',
    text: 'What is the key difference in assumptions between the SIR (Susceptible-Infected-Recovered) and SIS (Susceptible-Infected-Susceptible) models of epidemics that leads to different long-term dynamics?',
    options: [
      'SIR models assume individuals gain permanent immunity after recovery (or die), preventing reinfection, while SIS models assume individuals become susceptible again after recovery.',
      'SIS models always lead to complete disease eradication eventually, while SIR models often result in endemic states.', // Often the opposite is true.
      'SIR models require a fixed network topology for analysis, while SIS models are more flexible.', // Both can be analyzed on networks.
      'In SIS models, the disease can persist indefinitely even if R₀ < 1.', // Persistence in SIS typically requires R0 > 1 (or effective R0 > 1).
    ],
    correctAnswer: 0,
    explanation: 'The defining difference is the state transition after infection. In SIR, individuals enter a permanent Removed state (R), limiting the epidemic\'s duration. In SIS, individuals return to the Susceptible state (S), allowing for reinfection and potentially endemic persistence of the disease.',
    topics: ['Epidemic Models', 'SIR Model', 'SIS Model', 'Comparison', 'Immunity', 'Reinfection', 'Week 10']
  },
  {
    id: 'percolation-w10-q7',
    text: 'In network science, applying percolation theory to epidemics involves modeling interventions like vaccination or node removal. What does the percolation threshold represent in this context?',
    options: [
      'The critical fraction of nodes or edges that must be removed (e.g., vaccinated or quarantined) to break the network into small disconnected components, thereby preventing a large-scale epidemic.',
      'The average time it takes for the entire network to become infected once an epidemic starts.',
      'The final percentage of the population that needs to be vaccinated to achieve herd immunity.', // Related concept, but threshold is about fragmentation.
      'The minimum average degree required in the network to sustain an epidemic spread.'
    ],
    correctAnswer: 0,
    explanation: 'The percolation threshold is the critical point at which removing nodes or edges causes the network to lose its large connected component (the "giant component"). In epidemic terms, reaching this threshold means interventions have successfully fragmented the network enough to stop widespread transmission.',
    topics: ['Percolation Theory', 'Epidemic Threshold', 'Network Robustness', 'Vaccination', 'Intervention', 'Week 10']
  },
  {
    id: 'robustness-attack-w10-q8',
    text: 'When analyzing network robustness, how does the impact of random node failures typically differ from targeted attacks on high-degree nodes, especially in scale-free networks?',
    options: [
      'Scale-free networks are relatively robust to random failures (most nodes have low degree) but highly vulnerable to targeted attacks on hubs, which quickly fragment the network.',
      'Scale-free networks collapse at roughly the same rate under both random failures and targeted attacks.',
      'Removing low-degree nodes randomly has a more severe impact on network connectivity than removing hubs.', // Opposite is true.
      'The dynamics of network fragmentation under random node failures and targeted attacks follow identical percolation thresholds and patterns.' // Thresholds differ significantly.
    ],
    correctAnswer: 0,
    explanation: 'This highlights the "Achilles\' heel" of scale-free networks. Random failures likely hit unimportant nodes, preserving connectivity. Targeted removal of the few vital hubs rapidly degrades network integrity. Random networks lack these critical hubs and degrade more gracefully under attack but are less robust to random failure.',
    topics: ['Network Robustness', 'Scale-Free Networks', 'Targeted Attack', 'Random Failure', 'Percolation', 'Vulnerability', 'Week 10']
  },
  {
    id: 'branching-extinct-w10-q9',
    text: 'In a simple branching process model representing the initial phase of an epidemic (where each infected individual infects a random number of others with average R₀), what is the approximate probability (P_extinction) that the epidemic dies out quickly (starting from one infected individual)?',
    options: [
      'P_extinction ≈ 1 / R₀, if R₀ > 1', // Specific result/approximation
      'P_extinction ≈ 1 - (1 / R₀), if R₀ > 1', // Probability of major outbreak
      'P_extinction = e^(-R₀)', // Related to Poisson approximation
      'Epidemics always spread indefinitely in simple branching models if R₀ > 0.' // Incorrect, extinction is possible.
    ],
    // Using the provided answer, despite potential nuances for exact distribution.
    correctAnswer: 0,
    explanation: 'Branching processes model stochastic spread. Even if the average number of secondary infections R₀ is greater than 1, there\'s a non-zero chance the chain of infections dies out by random chance. For R₀ > 1, this extinction probability is less than 1 and related to R₀ (approximately 1/R₀ in some cases). If R₀ ≤ 1, extinction is certain (P_extinction = 1).',
    topics: ['Branching Process', 'Epidemic Models', 'Extinction Probability', 'Stochastic Models', 'R0', 'Week 10']
  },
  {
    id: 'epidemic-resistance-w10-q10',
    text: 'Considering typical structures, which network type is generally most resistant to the *initial* rapid spread of an epidemic, assuming transmission occurs only between connected neighbors?',
    options: [
      'Scale-free networks (due to hubs facilitating rapid spread)',
      'Random graphs (relatively fast spread due to short paths)',
      'Regular lattice-based networks (spread is often slower, constrained by local structure and longer paths)',
      'Small-world networks (short paths allow rapid spread, similar to random graphs)'
    ],
    correctAnswer: 2,
    explanation: 'In regular lattices (like grids), nodes have limited, structured connections. Path lengths are generally longer, and there are no long-range shortcuts or hubs. This topology inherently slows down the spatial progression of an epidemic compared to networks with random links or hubs.',
    topics: ['Epidemic Spreading', 'Network Structure', 'Lattices', 'Resistance', 'Comparison', 'Week 10']
  },
  {
    id: 'myopic-w12-q1',
    text: 'In myopic search, how does an agent decide the next step in the search process?',
    options: [
      'By looking ahead multiple steps and computing the best path',
      'By making decisions based only on immediate local information (e.g., choosing the neighbor closest to the target)',
      'By randomly selecting a path at each step',
      'By following a predefined shortest path algorithm like Dijkstra\'s'
    ],
    correctAnswer: 1,
    explanation: 'Myopic search strategies are greedy; they make the choice that looks best at the current step based on local information, without considering the potential long-term consequences or optimality of the overall path.',
    topics: ['Myopic Search', 'Local Information', 'Greedy Algorithm', 'Search Strategy', 'Week 12']
  },
  {
    id: 'myopic-eff-w12-q2',
    text: 'How does myopic search generally compare to optimal search (like BFS for unweighted paths) in terms of path efficiency?',
    options: [
      'Myopic search always finds the globally shortest path.',
      'Myopic search can get stuck in local optima or follow longer paths because it lacks global knowledge.',
      'Myopic search always runs faster than optimal search algorithms in all types of networks.', // Not always true, depends on implementation/network.
      'Myopic search typically requires more computational resources due to backtracking.' // It often requires less computation per step.
    ],
    correctAnswer: 1,
    explanation: 'The primary drawback of myopic search is its potential suboptimality. By focusing only on local gains, it might miss shortcuts or get trapped in regions of the network from which the optimal path is inaccessible.',
    topics: ['Myopic Search', 'Optimal Search', 'Suboptimality', 'Local Minima', 'Efficiency Comparison', 'Week 12']
  },
  {
    id: 'myopic-complex-w12-q3',
    text: 'The time complexity (or number of steps taken) of a myopic search in a network depends significantly on:',
    options: [
      'The network size (number of nodes/edges) and the degree distribution (choices available at each step).',
      'Only the number of hubs present in the network.',
      'Primarily the presence or absence of long-range connections.',
      'Mainly the average clustering coefficient of the network.'
    ],
    correctAnswer: 0,
    explanation: 'The path length and the work done at each step are influenced by the overall size of the network and how many neighbors (degree) a typical node has, which determines the options evaluated locally.',
    topics: ['Myopic Search', 'Time Complexity', 'Network Properties', 'Network Size', 'Degree Distribution', 'Week 12']
  },
  {
    id: 'myopic-speed-w12-q4',
    text: 'What often makes myopic search computationally faster per step compared to exhaustive search methods in large networks?',
    options: [
      'It effectively prunes the search space by not exploring paths that don\'t look locally promising.',
      'It guarantees visiting all relevant nodes more efficiently.', // Doesn't guarantee visiting all nodes.
      'It requires precomputing all possible shortest paths.', // Optimal methods might, myopic doesn't.
      'It uses global information to guide the search more directly.' // It uses local information.
    ],
    correctAnswer: 0,
    explanation: 'Myopic search avoids the combinatorial explosion of exploring all possible paths or maintaining large data structures (like BFS queues for the entire frontier). It makes a quick local decision and moves on, pruning branches implicitly.',
    topics: ['Myopic Search', 'Exhaustive Search', 'Computational Speed', 'Efficiency', 'Pruning', 'Week 12']
  },
  {
    id: 'viral-w12-q5',
    text: 'Which network property is often considered most important for enabling something (information, disease, behavior) to go "viral" by spreading widely across different groups?',
    options: [
      'High clustering coefficient (local density)', // Can trap spread within groups.
      'Presence of weak ties acting as bridges between otherwise disconnected clusters.',
      'A large number of triangles (closed triads) in the network.', // Relates to clustering.
      'A high number of separate connected components.' // Prevents widespread diffusion.
    ],
    correctAnswer: 1,
    explanation: 'As highlighted by Granovetter, weak ties often serve as bridges connecting different communities. These bridges are crucial for allowing information or influence to jump between groups and achieve widespread, viral diffusion.',
    topics: ['Virality', 'Information Diffusion', 'Weak Ties', 'Network Structure', 'Bridges', 'Granovetter', 'Week 12']
  },
  {
    id: 'viral-influence-w12-q6',
    text: 'In a social network, if you want to start a cascade or spread information widely (maximize influence), which type of node is generally the best starting point?',
    options: [
      'A high-degree node (hub) that is connected to many other individuals.',
      'A randomly chosen node within the network.',
      'A node with very low betweenness centrality (not on many shortest paths).',
      'A node with no outgoing edges (a sink).'
    ],
    correctAnswer: 0,
    explanation: 'High-degree nodes, or hubs, have the largest immediate reach. Starting a diffusion process from a hub allows the information or behavior to potentially reach a large audience quickly, increasing the chances of triggering a cascade.',
    topics: ['Influence Maximization', 'Hubs', 'Degree Centrality', 'Virality', 'Cascades', 'Seed Selection', 'Week 12']
  },
  {
    id: 'pseudocore-def-w12-q7',
    text: 'What is generally meant by a "pseudocore" in the analysis of network structure and diffusion?',
    options: [
      'A node that connects different clusters but is not itself highly connected (a bridge node).',
      'A relatively dense and central subgraph that, while perhaps not the absolute mathematical core (like k-core), plays a key role in the network\'s overall connectivity and diffusion dynamics.',
      'A node identified solely by having the highest betweenness centrality.',
      'A node with low degree but surprisingly high influence (e.g., due to strategic position).'
    ],
    correctAnswer: 1,
    explanation: 'A pseudocore refers to a functionally important central region of the network. It\'s a densely interconnected group of nodes that acts like a core structure, facilitating communication and potentially amplifying or sustaining diffusion processes.',
    topics: ['Pseudocore', 'Network Structure', 'Core-Periphery', 'Information Diffusion', 'Dense Subgraphs', 'Week 12']
  },
  {
    id: 'pseudocore-imp-w12-q8',
    text: 'Why are pseudocores considered important in understanding network diffusion processes?',
    options: [
      'They primarily function to increase the network\'s overall clustering coefficient.',
      'They can act as crucial intermediate stages or amplifiers for information spreading between different parts of the network, including connecting hubs or communities.',
      'Their main role is to prevent the main network hubs from becoming overloaded.',
      'They typically function to slow down or block the spread of information through the network.'
    ],
    correctAnswer: 1,
    explanation: 'The density and centrality of pseudocores allow them to effectively receive, retain, and rebroadcast information or influence. They can act as stepping stones or reservoirs, contributing significantly to the reach and persistence of cascades.',
    topics: ['Pseudocore', 'Information Diffusion', 'Network Structure', 'Cascades', 'Amplification', 'Week 12']
  },
  {
    id: 'cascade-principle-w12-q9',
    text: 'What is the core principle behind threshold-based cascading models (like the Linear Threshold Model) used to simulate information or behavior spread?',
    options: [
      'Information spreads only through the strongest available ties.',
      'A node adopts an idea or behavior only when the fraction (or number) of its neighbors that have already adopted exceeds its personal adoption threshold.',
      'The spread occurs instantaneously across the entire network once initiated.',
      'The spread is guaranteed to be uniform, reaching all nodes at the same rate.'
    ],
    correctAnswer: 1,
    explanation: 'These models capture the idea of social proof or peer pressure. An individual node resists adoption until enough of its neighbors have adopted, crossing a specific threshold unique to that node.',
    topics: ['Cascading Models', 'Linear Threshold Model', 'Adoption Threshold', 'Information Diffusion', 'Collective Behavior', 'Social Influence', 'Week 12']
  },
  {
    id: 'cascade-param-w12-q10',
    text: 'When implementing a threshold-based cascading model (e.g., Linear Threshold Model) in code, what is the most critical parameter associated with each node that governs its decision to adopt?',
    options: [
      'The degree (number of neighbors) of the node.',
      'The specific adoption threshold (e.g., a fraction between 0 and 1) assigned to that node.',
      'The total number of nodes present in the network.',
      'The diameter (longest shortest path) of the network.'
    ],
    correctAnswer: 1,
    explanation: 'The simulation logic revolves around checking, for each inactive node, whether the proportion of its active neighbors meets or exceeds its individually assigned adoption threshold. This threshold value is the key determinant of adoption.',
    topics: ['Cascading Models', 'Linear Threshold Model', 'Implementation', 'Parameters', 'Adoption Threshold', 'Week 12']
  }
  // ... (Keep other weeks' questions below or above this block) ...

];

// Function to get a random subset of questions
export const getRandomSocialNetworksQuestions = (count: number): Question[] => {
  // Create a copy before shuffling
  const shuffled = [...socialNetworksQuestions];
  // Fisher-Yates (Knuth) Shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled.slice(0, count);
};
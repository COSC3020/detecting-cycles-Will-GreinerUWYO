function hasCycle(graph) {
    // empty graph cannot have cycles
    if(graph.length === 0) {
        return false;
    }
    // keeps an array with a value for each node, set to false, changed when the node is checked.
    let visited = [];
    for (let i = 0; i < graph.length; i ++) {
        visited.push(false);
    }

    // resets the visited to ensure correct values.
    visited = visitedReset(visited, graph);

    // looks for a cycle for every starting node, since each has a different path
    for(let startNode = 0; startNode < graph.length; startNode++){
        // resets visited
        visited = visitedReset(visited, graph);
        // sets the first node to search for true.
        visited[startNode] = true;
        // if a cycle is found, return true
        if(searchforCycle(graph, startNode, visited)){
            return true;
        }
    }
    // if no cycle is found for any graph, return false
    return false;
}

// looks for cycles given the visited array and a node
function searchforCycle(graph, node, visited){
    // marks current node as visisted now
    visited[node] = true;
    // checks each node connected to the current node
    for(const adjNode of graph[node]) {
        // if the node has been already visited, there is a cycle 
        if(visited[adjNode] === true){
            return true;
        }
        else{
            // searches for cycles related to the current node by checking their connected nodes against the current iteration of visited
            if(searchforCycle(graph, adjNode, visited)){
                return true;
            }
        }
    }
    return false;
}

// resets my visited array to all falses.
function visitedReset(visited, graph) {
    for(let i = 0; i < graph.length; i++){
        visited[i] = false;
    }
    return visited;
}
